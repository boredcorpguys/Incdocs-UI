import { Role } from './Role';
import { Mapping } from './Mapping';

export class User {
    private name: string;
    private incdocsID: string;
    private employeeID: string;
    private role: Role;
    private mobile: number;
    private email: string;
    private createdOn: string; // can this be a timestamp?
    private lastModifiedOn: string;
    private mappings: Array<Mapping>;

    constructor($name: string, $incdocsID: string, $employeeID: string, $role: Role,
        $mobile: number, $email: string, $createdOn: string, $lastModifiedOn: string, $mappings: Array<Mapping>) {
        this.name = $name;
        this.incdocsID = $incdocsID;
        this.employeeID = $employeeID;
        this.role = $role;
        this.mobile = $mobile;
        this.email = $email;
        this.createdOn = $createdOn;
        this.lastModifiedOn = $lastModifiedOn;
        this.mappings = $mappings;
    }


    public get $mappings(): Array<Mapping> {
        return this.mappings;
    }

    public set $mappings(value: Array<Mapping>) {
        this.mappings = value;
    }

    public get $incdocsID(): string {
        return this.incdocsID;
    }

    public set $incdocsID(value: string) {
        this.incdocsID = value;
    }

    public get $employeeID(): string {
        return this.employeeID;
    }

    public set $employeeID(value: string) {
        this.employeeID = value;
    }

    public get $role(): Role {
        return this.role;
    }

    public set $role(value: Role) {
        this.role = value;
    }

    public get $mobile(): number {
        return this.mobile;
    }

    public set $mobile(value: number) {
        this.mobile = value;
    }

    public get $email(): string {
        return this.email;
    }

    public set $email(value: string) {
        this.email = value;
    }

    public get $createdOn(): string {
        return this.createdOn;
    }

    public set $createdOn(value: string) {
        this.createdOn = value;
    }

    public get $lastModifiedOn(): string {
        return this.lastModifiedOn;
    }

    public set $lastModifiedOn(value: string) {
        this.lastModifiedOn = value;
    }

    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }


}

