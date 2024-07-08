import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'

const items = [
  {
    id: 'item-1',
    question: 'Is it accessible?',
    answer: 'Yes. It adheres to the WAI-ARIA design pattern.'
  },
  {
    id: 'item-2',
    question: 'Can I use it in my project?',
    answer: 'Yes. It is open source and free to use.'
  },
  {
    id: 'item-3',
    question: 'Can I customize it?',
    answer: 'Yes. It is highly customizable.'
  }
]

export const AccordionPage = () => {
  return (
    <div>
      <h1> Accordion </h1>
      {
        items.map( ( item ) => (
          <Accordion type="multiple" className="w-full" key={ item.id }>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) )
      }
    </div>
  )
}
