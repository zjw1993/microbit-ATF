//% weight=10 color=#e7660b icon="\uf1b9"
namespace ATF { 

    //% blockId="ATF_LiteLed" block="LiteLed|%pin|value %value"
    //% weight=80
    export function LiteLed(pin: DigitalPin, value: number): void { 
        pins.digitalWritePin(pin, value);
    }
}
