export default function TabButton({children, isSelected, ...props}) {
    console.log('TABBUTTON COMPONENT EXCUTING');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}