//-----------------------------------------------------
//
// Author: Daeren
// Site: 666.io
//
//-----------------------------------------------------

const CMD = {
    "CONNECT": 0x01,
    "BIND": 0x02,
    "UDP": 0x03
};

const ADDRESS_TYPE = {
    "IPv4": 0x01,
    "DOMAIN": 0x03,
    "IPv6": 0x04
};

const RESPONSE = {
    "SUCCESS": 0x00,

    "INTERNAL_ERROR": 0x01,
    "DISALLOW": 0x02,

    "NET_UNREACH": 0x03,
    "HOST_UNREACH": 0x04,

    "CONN_REFUSED": 0x05,
    "TTL_EXPIRED": 0x06,

    "CMD_UNSUPP": 0x07,
    "ADDRESS_TYPE_UNSUPP": 0x08
};

//-----------------------------------------------------

module.exports = {CMD, ADDRESS_TYPE, RESPONSE};