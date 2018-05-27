export class GenericConfirmationPopupData {
    private headerMessage: string;
    private bodyMessage: string;
    
    constructor($headerMessage: string, $bodyMessage: string) {
        this.headerMessage = $headerMessage;
        this.bodyMessage = $bodyMessage;
    }
    

}