//% weight=10 color=#e7660b icon="\uf1b9"
namespace ATF { 

    //% blockId="LiteLed"
    //% weight=80
    export function LiteLed(pin: DigitalPin, value: number): void { 
        pins.digitalWritePin(pin, value);
    }
}
