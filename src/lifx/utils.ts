import lifxClient from '../lifx/client';

const powerAllOn = async function() {
    await lifxClient.power.all('on');
};
const powerAllOff = async function () {
    await lifxClient.power.all('off');
};

const lifxUtils = {
    powerAllOn,
    powerAllOff
}

export default lifxUtils;