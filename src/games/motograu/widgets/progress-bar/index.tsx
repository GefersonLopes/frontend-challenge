import React from 'react'

type Props = {
  value: number
  max: number
  color: string
  label?: string
}

const getBackgroundColor = (color: string) => {
  switch (color) {
    case 'blue':
      return 'bg-blue-600'
    case 'lime':
      return 'bg-[#28a909]'
    case 'yellow':
      return 'bg-yellow-400'
    case 'amber':
      return 'bg-amber-600'
    case 'red':
      return 'bg-red-700'
    case 'pink':
      return 'bg-pink-700'
    case 'rose':
      return 'bg-rose-700'
    case 'gray':
      return 'bg-gray-400'
    case 'violet':
      return 'bg-[#7f047f]'
  }
}

export default function ProgressBar({
  max,
  value,
  color,
  label = 'Próxima Rodada em',
}: Props) {
  return (
    <>
      <small className={`h-2 font-bold text-center text-xs pointer-events-none flex items-center justify-center uppercase flex bolder w-full mb-1 text-[#7f047f] pr-3 pl-3`}>
        Iniciando
      </small>
      <div className="w-full flex items-center border border-gray-500 bg-gray-600 bg-opacity-50 border-opacity-50 rounded-md dark:bg-gray-700 h-2">
        <div
          className={`${getBackgroundColor(
            'violet'
          )} transition-all duration-100 rounded-md h-2`}
          style={{
            width: `${100 - (value / max) * 100}%`,
            transitionTimingFunction: 'linear',
            transitionDuration: '990ms',
          }}
        />
      </div>
    </>
  )
}
