export class ShowUserToCompanyMapping {
    private companyName: string;
    private pan: string;
    private mappedOn: string;


    constructor($companyName: string, $pan: string, $mappedOn: string) {
        this.companyName = $companyName;
        this.pan = $pan;
        this.mappedOn = $mappedOn;
    }



    public get $companyName(): string {
        return this.companyName;
    }

    public set $companyName(value: string) {
        this.companyName = value;
    }

    public get $pan(): string {
        return this.pan;
    }

    public set $pan(value: string) {
        this.pan = value;
    }

    public get $mappedOn(): string {
        return this.mappedOn;
    }

    public set $mappedOn(value: string) {
        this.mappedOn = value;
    }

}