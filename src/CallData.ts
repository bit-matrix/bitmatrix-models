import { CallDataBase } from "./CallDataBase";
import { CallDataValue } from "./CallDataValue";

export type CallData =  CallDataBase & {
  value: CallDataValue;
};