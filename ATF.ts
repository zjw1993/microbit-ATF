namespace ATF { 
    export function LiteLed(pin: DigitalPin, value: number) { 
        pins.digitalWritePin(pin, value);
    }
}
