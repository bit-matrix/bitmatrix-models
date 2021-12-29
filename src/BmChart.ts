import { CALL_METHOD } from "./CALL_METHOD";

export type BmChart = {
    time: number;
    ptxid: string;
    value: { quote: number; token: number; lp: number };
    volume: { quote: number; token: number };
    price: number;
    method: CALL_METHOD;
};