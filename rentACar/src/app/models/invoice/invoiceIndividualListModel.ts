import { AdditionalServiceAddModel } from './../additional-service/additionalServiceAddModel';
export interface InvoiceIndividualListModel{
  id:number
  nationalityId:string
  firstName:string
  lastName:string
  email:string
  rentDate:Date
  returnedDate:Date
  totalPrice:number
  creationDate:Date
  additonalServiceItems:AdditionalServiceAddModel[]
}
