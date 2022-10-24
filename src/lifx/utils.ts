import lifxClient from '../lifx/client';

const powerAllOn = async function() {
    await lifxClient.power.all('on');
};
const powerAllOff = async function () {
    await lifxClient.power.all('off');
};
const setColor = async function (color: string) {
    const colors_db = require('../../data/colors.json');
    let hexValidate = /^#([0-9a-f]{3}){1,2}$/i;
    let dbValidate = colors_db.find((c: any) => c.name == color.toLowerCase());
    
    if (hexValidate.test(color)) {
        await lifxClient.color.all({
            hex: color
        });

        return true;
    } else if (dbValidate) {
        await lifxClient.color.all({
            hex: dbValidate.hex
        });

        return true;
    } else {
        return false;
    }
};

const lifxUtils = {
    powerAllOn,
    powerAllOff,
    setColor
};

export default lifxUtils;