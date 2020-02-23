'use strict';

var accessKey = process.env.AWS_ACCESS_KEY_ID || 'YOUR_KEY';
var accessSecret = process.env.AWS_SECRET_ACCESS_KEY || 'YOUR_SECRET';

var amazonMws = require('../../../lib/amazon-mws')(accessKey, accessSecret);

/**
 * This example has been written to override/set the contentType of the request.
 */

var reportRequest = function () {
    amazonMws.setContentType('application/json');

    amazonMws.reports.submit({
        'Version': '2009-01-01',
        'Action': 'RequestReport',
        'SellerId': 'SELLER_ID',
        'MWSAuthToken': 'MWS_AUTH_TOKEN',
        'ReportType': '_GET_MERCHANT_LISTINGS_ALL_DATA_'
    }, function (error, response) {
        if (error) {
            console.log('error ', error);
            return;
        }
        console.log('response', response);
    });
};

reportRequest();