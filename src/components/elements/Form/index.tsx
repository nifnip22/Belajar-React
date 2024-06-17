import Input from './Input';
import Label from './Label';

type InputFormProps = {
    name: string;
    text: string;
    type: string;
    placeholder: string;
}

const InputForm = (props: InputFormProps) => {
    const { name, text, type, placeholder } = props

	return (
		<>
			<div className='mb-6'>
				<Label htmlFor={name}>{text}</Label>
				<Input id={name} type={type} name={name} placeholder={placeholder} />
			</div>
		</>
	);
};

export default InputForm;
