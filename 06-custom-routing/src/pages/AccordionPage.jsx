import Accordion from "./components/Accordion"
function AccordionPage  ()  {
    const items = [
        {
            id:'1',
            label: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id:'2',
            label: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
        },
        {
            id:'3',
            label: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
        }
    ]

    return <Accordion items={items}/>;
   
}

export default AccordionPage;
