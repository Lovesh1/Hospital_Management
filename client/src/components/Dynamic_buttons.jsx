import Dropmenu from './Dropdown.jsx'

export const InitialButtons = [
    {className:"px-2 py-0 bg-blue-950 text-white rounded-md", label:"Assign Doctor"},
    {className:"px-2 py-0 bg-blue-950 text-white rounded-md", label:"Assign CareTaker"},
    {className:"px-2 py-0 bg-blue-950 text-white rounded-md", label:"Add Tags"},
];

export const InitialButtons2 = [
    {classbtn:"px-5 bg-blue-950 text-white rounded", label:"Admit"},
    {classbtn:"px-2",
    classdiv: "relative border-4 border-blue-950 rounded-md",
    label: "PreOperative",
    dropdown: (
            <div className="absolute p-2 border rounded shadow mt-1 bg-blue-50">
            <Dropmenu/>
            </div>    
    ),
 },
];