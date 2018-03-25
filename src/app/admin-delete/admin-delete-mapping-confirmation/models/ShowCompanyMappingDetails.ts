import {User} from './../../../models/User';

export class ShowCompanyMappingDetails {
    private role: string;
    private name: string;
    private incdocsId: string;
    private employeeId: string;
	private selected: boolean;

	

	constructor( user : User){
		this.role = user.$role;
		this.name = user.$name;
		this.incdocsId = user.$incdocsID;
		this.employeeId = user.$employeeID;
		this.selected = false;
	}


	public get $selected(): boolean {
		return this.selected;
	}

	public set $selected(value: boolean) {
		this.selected = value;
	}
	
	public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}

	public get $incdocsId(): string {
		return this.incdocsId;
	}

	public set $incdocsId(value: string) {
		this.incdocsId = value;
	}

	public get $employeeId(): string {
		return this.employeeId;
	}

	public set $employeeId(value: string) {
		this.employeeId = value;
	}


	public get $role(): string {
		return this.role;
	}

	public set $role(value: string) {
		this.role = value;
	}
    

}