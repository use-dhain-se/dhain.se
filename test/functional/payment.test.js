// /**
//  * Test picasaWeb and Gravatar
//  * @type {"assert".internal | ((value: any, message?: string) => void)}
//  */
// let chai = require('chai');
// let expect = chai.expect;
// const payment = require('../../api/payment/services/Payment');
// 
// const websiteUrl='';
// const isActive=false;
// describe('Should Return payment Data', function() {
//   describe('#payment-add()', function() {
//     it('should return data when the value is passed', function() {
//       let values = {
//         name:'Raman Parashar',
//         email:"raman.parashar.dce@gmail.com"
//       };
//         payment.add(values).then(function (data) {
//          expect(data.name).to.equal('Raman Parashar');
//          expect(data.email).to.equal('raman.parashar.dce@gmail.com');
//       });
//     });
//   });
// });
//
//
// describe('Should Return payment Data', function() {
//   describe('#fetchAll()', function() {
//     it('should return data when the value is passed', function() {
//       let params = {
//         websiteLive:'Useinfluence.co',
//         notificationCount:34,
//         uniqueUsers:12
//       }
//         payment.fetchAll(params).then(function (data) {
//          expect(data.websiteLive).to.not.equal(null);
//          expect(data.notificationCount).to.not.equal(null);
//          expect(data.uniqueUsers).to.not.equal(null);
//
//       });
//     });
//   });
// });
//
// describe('Should Return payment Data', function() {
//   describe('#fetchAllpayment()', function() {
//     it('should return data when the value is passed', function() {
//       let params = {
//         websiteLive:'Useinfluence.co',
//         notificationCount:34,
//         uniqueUsers:12
//       }
//         payment.fetchAllUserPayments(params).then(function (data) {
//          expect(data.websiteLive).to.not.equal(null);
//          expect(data.notificationCount).to.not.equal(null);
//          expect(data.uniqueUsers).to.not.equal(null);
//
//       });
//     });
//   });
// });
//
// describe('Should Return payment Data', function() {
//   describe('#fetchAllPlanPayments()', function() {
//     it('should return data when the value is passed', function() {
//       let params = {
//         websiteLive:'Useinfluence.co',
//         notificationCount:34,
//         uniqueUsers:12
//       }
//         payment.fetchAllPlanPayments(params).then(function (data) {
//          expect(data.websiteLive).to.not.equal(null);
//          expect(data.notificationCount).to.not.equal(null);
//          expect(data.uniqueUsers).to.not.equal(null);
//
//       });
//     });
//   });
// });
//
// describe('Should Return payment Data', function() {
//   describe('#fetch()', function() {
//     it('should return data when the value is passed', function() {
//       let params = {
//         websiteLive:'Useinfluence.co',
//         notificationCount:34,
//         uniqueUsers:12
//       }
//         payment.fetch(params).then(function (data) {
//          expect(data.websiteLive).to.not.equal(null);
//          expect(data.notificationCount).to.not.equal(null);
//          expect(data.uniqueUsers).to.not.equal(null);
//
//       });
//     });
//   });
// });
//
// describe('Should Edit payment Data', function() {
//   describe('#edit()', function() {
//     it('should return data when the value is passed', function() {
//       let params = {
//         websiteLive:'Useinfluence.co',
//         notificationCount:34,
//         uniqueUsers:12
//       };
//       let values = {
//         name:'Raman Parashar',
//         email:"raman.parashar.dce@gmail.com"
//       };
//         payment.edit(params,values).then(function (data) {
//          expect(data.websiteLive).to.not.equal(null);
//          expect(data.notificationCount).to.not.equal(null);
//          expect(data.uniqueUsers).to.not.equal(null);
//          expect(data.name).to.not.equal(null);
//          expect(data.email).to.not.equal(null);
//         });
//     });
//   });
// });
//
// describe('Should Edit payment Data', function() {
//   describe('#remove()', function() {
//     it('should return data when the value is passed', function() {
//       let params = {
//         websiteLive:'Useinfluence.co',
//         notificationCount:34,
//         uniqueUsers:12
//       };
//         payment.remove(params).then(function (data) {
//          expect(data.websiteLive).to.not.equal(null);
//          expect(data.notificationCount).to.not.equal(null);
//          expect(data.uniqueUsers).to.not.equal(null);
//         });
//     });
//   });
// });
