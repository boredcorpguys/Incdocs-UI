export class ModifyMappingsRow {
    private company: string;
    private rm: string;
    private arm1: string;
    private arm2: string;
    private arm3: string;
    private mop1: string;
    private mop2: string;


    constructor($company: string, $rm: string, $arm1: string, $arm2: string, $arm3: string, $mop1: string, $mop2: string) {
        this.company = $company;
        this.rm = $rm;
        this.arm1 = $arm1;
        this.arm2 = $arm2;
        this.arm3 = $arm3;
        this.mop1 = $mop1;
        this.mop2 = $mop2;
    }


    public get $company(): string {
        return this.company;
    }

    public set $company(value: string) {
        this.company = value;
    }

    public get $rm(): string {
        return this.rm;
    }

    public set $rm(value: string) {
        this.rm = value;
    }

    public get $arm1(): string {
        return this.arm1;
    }

    public set $arm1(value: string) {
        this.arm1 = value;
    }

    public get $arm2(): string {
        return this.arm2;
    }

    public set $arm2(value: string) {
        this.arm2 = value;
    }

    public get $arm3(): string {
        return this.arm3;
    }

    public set $arm3(value: string) {
        this.arm3 = value;
    }

    public get $mop1(): string {
        return this.mop1;
    }

    public set $mop1(value: string) {
        this.mop1 = value;
    }

    public get $mop2(): string {
        return this.mop2;
    }

    public set $mop2(value: string) {
        this.mop2 = value;
    }
    D
}