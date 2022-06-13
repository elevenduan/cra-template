const Mock = require('mockjs');

module.exports = {
  'GET /api/login': (req, res) => {
    res.status(200).send({
      resCode: '0000',
      resMsg: 'mock success',
      data: {
        id: 5789444,
        name: 'coco',
        status: 'available'
      }
    });
  },
  'POST /api/account': (req, res) => {
    res.status(200).send({
      resCode: '0000',
      resMsg: 'mock success',
      data: {
        id: 10,
        status: 'approved',
        shipDate: Mock.mock('@date'),
        complete: false,
        list: [
          ['et exercitation ut esse mollit', 'nostrud', 'amet ipsum aute ex tempor'],
          ['proident', 'dolor occaecat', 'eu in nulla']
        ],
        uuid: Mock.mock('@guid'),
        city: Mock.mock('@city'),
        url: Mock.mock('@url("https")')
      }
    });
  }
};
