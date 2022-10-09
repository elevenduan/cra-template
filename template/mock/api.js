const Mock = require('mockjs');

function response(req, res, data) {
  const status = 200;
  setTimeout(() => {
    res.status(status).send({
      code: '0000',
      message: 'mock success',
      data
    });
  }, 1000);
}

module.exports = {
  'GET /api/login': (req, res) => {
    response(req, res, {
      id: 5789444,
      name: 'coco',
      status: 'available'
    });
  },
  'POST /api/account': (req, res) => {
    response(req, res, {
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
    });
  }
};
