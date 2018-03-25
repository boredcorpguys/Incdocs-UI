import { Company } from "../../../models/Company";

export class ShowCompanyDetails{
    private nameame:string;
    private rm:string;
    private arm1:string;
    private arm2:string;
    private mop1:string;
    private mop2:string;


	constructor(company: Company) {
		this.nameame = company.$name;
		this.rm = company.$rm.$name;
		this.arm1 = company.$arm1.$name;
		this.arm2 = company.$arm2.$name;
		this.mop1 = company.$mop1.$name;
		this.mop2 = company.$mop2.$name;
	}
    

	public get $nameame(): string {
		return this.nameame;
	}

	public set $nameame(value: string) {
		this.nameame = value;
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
    
    
}