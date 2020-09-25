enum PIN { 
    P0 = 0,
    P1 = 1,
    P2 = 2
}
namespace ATF { 



    export function LiteLed(pin: PIN, value: number) { 
        pins.digitalWritePin(pin.valueOf(), value);
    }
}
