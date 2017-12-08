export class Mapping {
    company: string;
    rm: string;
    arm1: string;
    arm2: string;
    arm3: string;
    middleOfficePerson1: string;
    middleOfficePerson2: string;

    constructor(_company: string, _rm: string, _arm1: string,
        _arm2: string, _arm3: string, _middleOfficePerson1: string, _middleOfficePerson2: string) {
        this.company = _company;
        this.rm = _rm;
        this.arm3 = _arm3;
        this.arm1 = _arm1;
        this.arm2 = _arm2;
        this.middleOfficePerson1 = _middleOfficePerson1;
        this.middleOfficePerson2 = _middleOfficePerson2;
    }
}
