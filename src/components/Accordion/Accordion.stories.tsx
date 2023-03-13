import React from 'react'
import { Accordion, accordionPropsDefault } from './Accordion'
import { TAccordionProps } from './types'

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    controls: {
      include: [],
      exclude: []
    }
  },
  argTypes: {}
}

export const Default = ({ buttonContent }: TAccordionProps) => (
  <Accordion initialIsOpen={false} buttonContent={buttonContent}>
    Use the extraAction prop to pass an extra action displayed on the right of any accordion. Usually this is a delete or button, but can be anything. Note that this action is separate from the click state that expands the accordion. This is needed to make it accessible. Use the extraAction prop to pass an extra action displayed on the right of any accordion. Usually this is a delete or button, but can be anything. Note that this action is separate from the click state that expands the accordion. This is needed to make it accessible. Use the extraAction prop to pass an extra action displayed on the right of any accordion. Usually this is a delete or button, but can be anything. Note that this action is separate from the click state that expands the accordion. This is needed to make it accessible. Use the extraAction prop to pass an extra action displayed on the right of any accordion. Usually this is a delete or button, but can be anything. Note that this action is separate from the click state that expands the accordion. This is needed to make it accessible.
  </Accordion>
)

Default.storyName = 'default'

Default.args = {
  ...accordionPropsDefault
}
