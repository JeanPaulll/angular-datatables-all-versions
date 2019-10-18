export declare type FieldDataType = "text" | "number" | "date" | "enum" | "bool"

export interface FilterableField {
  header: string;
  property: string;
  dataType: FieldDataType
  possibleOptions?: (string | { value: string, displayText: string })[];
}
