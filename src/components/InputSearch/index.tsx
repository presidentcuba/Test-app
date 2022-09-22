import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
interface InputProps {
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  placeholder: string;
}
const InputSearch: React.FC<InputProps> = ({
  onChange,
  placeholder,
  onClick,
}) => {
  const suffix = (
    <SearchOutlined
      onClick={(e) => onClick && onClick(e)}
      style={{
        fontSize: 16,
        color: "#cdcdcd",
      }}
    />
  );
  return (
    <Input
      onChange={(e) => onChange && onChange(e)}
      suffix={suffix}
      placeholder={placeholder}
    />
  );
};
export default InputSearch;
