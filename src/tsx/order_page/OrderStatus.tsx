import {OrderStatus as OrderStatusEnum} from "../../types/Order";

interface Props {
    orderStatus: OrderStatusEnum
}

export default function OrderStatus({orderStatus} : Props) {
    let additional_classes = ""
    if (orderStatus === OrderStatusEnum.Completed) additional_classes = " uk-label-success"
    else if (orderStatus === OrderStatusEnum.Rejected) additional_classes = " uk-label-danger"
    return <div className={`uk-label uk-text-capitalize${additional_classes}`}>{orderStatus}</div>
}
