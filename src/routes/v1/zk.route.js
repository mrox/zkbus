// /iclock/cdata?SN=CIZW232460001&options=all&language=69&pushver=2.4.1


const express = require('express');
const bodyParser = require('body-parser')

const logger = require('../../config/logger');

const router = express.Router();

router.use(bodyParser.text({type:"*/*"}))

router.get('/cdata', (req, res) => {
    logger.info(req.query);
    return res.send("OK")
});

router.post('/cdata', (req, res) => {

    logger.info('iclock');
    logger.info(JSON.stringify(req.query, null, 2));
    logger.info(JSON.stringify(req.body, null, 2));

    return res.send("OK")
});

let sendNewcmd = false;

router.get('/getrequest', (req, res) => {
    logger.info('getrequest');
    if (!sendNewcmd) {
        sendNewcmd = true;

        logger.info('sendNewcmd');
        const cmd = `C:${"123456789723241"}:DATA UPDATE USERINFO PIN=${"112"}\tName=${"Tuyen Tran Trung"}\tPri=${0}\tCard=12345678`
        return res.send(cmd);
    }
    else {
        logger.info('return OK');

        // \tPasswd=${XXX}${HT}Card=${XXX}${HT}Grp=${XXX}${HT}TZ=${XXX}${HT}Verify=${XXX}${HT}ViceCard=${XXX}`

        return res.send("OK")
    }
});

router.post('/devicecmd', (req, res) => {

    logger.info('devicecmd');
    logger.info(JSON.stringify(req.query, null, 2));
    // console.log(req);
    logger.info(`body: ${JSON.stringify(req.body, null, 2)}`);
    // logger.info(JSON.stringify(req.body, null, 2));
    // logger.info(JSON.stringify(req, null, 2));
    logger.info("===")
    return res.send("OK")
});

router.all('*', (req, res) => {
    logger.info('all');
    logger.info(JSON.stringify(req.query, null, 2));
    logger.info(JSON.stringify(req.body, null, 2));
    return res.send("OK")
});




module.exports = router;