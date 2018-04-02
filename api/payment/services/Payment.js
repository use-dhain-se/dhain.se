'use strict';

/**
 * Payment.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

module.exports = {

  /**
   * Promise to fetch all payments.
   *
   * @return {Promise}
   */

  fetchAllUserPayments: (params) => {
    const query = {
      profile: params?params._id:null
    };
    const convertedParams = strapi.utils.models.convertParams('payment', query);

    return Payment
      .find()
      .where(convertedParams.where)
      .sort(convertedParams.sort)
      .skip(convertedParams.start)
      .limit(convertedParams.limit)
      .populate('plan')
      // .populate(_.keys(_.groupBy(_.reject(strapi.models.payment.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  /**
   * Promise to fetch all plan payments.
   *
   * @return {Promise}
   */

  fetchAllPlanPayments: (params) => {
    const query = {
      plan: params.id
    };
    const convertedParams = strapi.utils.models.convertParams('payment', query);

    return Payment
      .find()
      .where(convertedParams.where)
      .sort(convertedParams.sort)
      .skip(convertedParams.start)
      .limit(convertedParams.limit)
      .populate('plan')
      // .populate(_.keys(_.groupBy(_.reject(strapi.models.payment.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  /**
   * Promise to fetch all payments.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    const convertedParams = strapi.utils.models.convertParams('payment', params);

    return Payment
      .find()
      .where(convertedParams.where)
      .sort(convertedParams.sort)
      .skip(convertedParams.start)
      .limit(convertedParams.limit)
      .populate('plan')
      // .populate(_.keys(_.groupBy(_.reject(strapi.models.payment.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  /**
   * Promise to fetch a/an payment.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    return Payment
      .findOne(_.pick(params, _.keys(Payment.schema.paths)))
      .populate('plan')
      // .populate(_.keys(_.groupBy(_.reject(strapi.models.payment.associations, {autoPopulate: false}), 'alias')).join(' '));
  },

  /**
   * Promise to add a/an payment.
   *
   * @return {Promise}
   */

  add: async (values) => {
    const data = await Payment.create(_.omit(values, _.keys(_.groupBy(strapi.models.payment.associations, 'alias'))));
    await strapi.hook.mongoose.manageRelations('payment', _.merge(_.clone(data), { values }));
    return data;
  },

  /**
   * Promise to edit a/an payment.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Note: The current method will return the full response of Mongo.
    // To get the updated object, you have to execute the `findOne()` method
    // or use the `findOneOrUpdate()` method with `{ new:true }` option.
    await strapi.hook.mongoose.manageRelations('payment', _.merge(_.clone(params), { values }));
    return Payment.update(params, values, { multi: true });
  },

  /**
   * Promise to remove a/an payment.
   *
   * @return {Promise}
   */

  remove: async params => {
    // Note: To get the full response of Mongo, use the `remove()` method
    // or add spent the parameter `{ passRawResult: true }` as second argument.
    const data = await Payment.findOneAndRemove(params, {})
      .populate(_.keys(_.groupBy(_.reject(strapi.models.payment.associations, {autoPopulate: false}), 'alias')).join(' '));

    _.forEach(Payment.associations, async association => {
      const search = (_.endsWith(association.nature, 'One')) ? { [association.via]: data._id } : { [association.via]: { $in: [data._id] } };
      const update = (_.endsWith(association.nature, 'One')) ? { [association.via]: null } : { $pull: { [association.via]: data._id } };

      await strapi.models[association.model || association.collection].update(
        search,
        update,
        { multi: true });
    });

    return data;
  }
};
