import './Tag.scss'

import { clsx } from 'clsx'
import React, { FC, forwardRef, LegacyRef, memo, useMemo } from 'react'

import { BaseProps } from '@/shared/types'

export type TagProps = BaseProps & {
  text: string
}

export const Tag: FC<TagProps> = memo(
  forwardRef(({ ref, className = '', color = 'pink', text, ...props }) => {
    const classes = useMemo(
      () => clsx('cui-tag', className).trim(),
      [className]
    )

    const styles = {
      main: {
        backgroundColor: color
      }

    }

    return (
      <div
        ref={ref as LegacyRef<any>}
        className={classes}
        data-testid="Tag"
        {...props}
        style={styles.main}
      >
        {text}
      </div>
    )
  })
)
