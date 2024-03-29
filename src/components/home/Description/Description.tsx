'use client'
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'

import styles from './Description.module.sass'

const placeholderImage = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAF/AX8DASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwUE/8QAFxABAQEBAAAAAAAAAAAAAAAAAAERAv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDykBltQAAFRQFRQFZVUVpFAEVUVUVUUFVBBVRQUBBQBQBARURRFQERURUrNarNBmpVqUVms1qs0GKzWqzQZrNarNFZrNWpVGQAfcAw0oiqACooCooDTKqgqKqKIqoqoqooKIoKqKgoioKIooAgICKIqAiKiKlZq1KKzWa1WaCVitVmgzWa1WaDNYrdYorNZrVZqiAgPvAYaAFFAVFEVUFRVZURWkVUURVZVUaEUFVFBVQQVUEFAFVAQAEVAQBlUqKlSrWaKlZrVZoM1mtVmgzWa1WKDNZrVZorNZrVZqiIAPvEGGlAUFQVFAVFVBWVVBpFVFEVUVUVWVEaVlQVUVFURQFQRVEEFQEUQQBKJUUrNWs0VKlWs0GazWqzQZrNarFBKxWqzRWazWqzVERUB94DDYAqKIqoKgqKqCsqqK0iqyoiqiqiqgI0IoKqCDQiiqIIqiCCoAogiAlEqKVmrWaBWatZoqVmrWaDNZrVYoJWK1WaKzWa1WaoiCA9ABhsVBUURVRRFVBUFZaEVUVWVVlVRVRVZUGlZUFVBBoQFVUEFEEUBBVQRASiVFSpVrNBKzWqzRWazWqzQZrNarFBKxWqxRUrNWs1RBAHoAMNioAoiqyog0iqgrLQiqiqyqsqqCo0rKgqoA0rKoKqAKIqKAIoICiAgM1UoqJRKglZq1mipWatZoJWatZorNZq1mgzWatZqiVCpqj0hBybURVFEFRVQaZVUFZVUFZaEFRpWVVFVFEVWVBVQFaEEGhBFUQFVBEVUEQEolFGarNRUrNarNBKzVrNBms1azRWazVrNBms1bWLVC1nS1nVHqiDk6KIKiqgqKIrTNURVZVWVVlVZVUVWVVGhFEVWVBoRQVWVRVEEVRAVUBFEEQEolFKzVrNRSs1azQSs1azQZrNWs0VmsVq1i0GbWLWrXO1QtREB6wg5uiiCjQgrLQgrNVUGmaqoKzVVBWWhBUaVlQVWVEaEBWlZEVoQFUQRVERFVBAEolRSs1azRSs1azUErNWs0Vms2rWLQS1ztatY6oM9VztXqsqAAj1BBydlVlVRRBpGhBWa0INMVoQVmtCCstCCo0rII0rKg0ICtCCDQgNKIIqoIiqggCUSopWarNFKzSpUErFatYtFS1i1bWLQTquXVa6rnaKlQFZAAelozpri7NCCjQg0zWhBqM1oQaZrQgrFaGVVloZVWWhBRpWVBoZ1UGhAVoZVFUQRpUQFVEEUSlSoFZpalFSs1azaipazatrFoJax1Vtc+qKz1WKtrIlAFQAB9+ms6rg7rq6zpqxGtVnV1uM1oZVpmtDKtM1VZVWKqsis1pWdNVlrV1lVRrVYXQaVlUVVZUVRBFUQRVEBoQRFEEoFSlZtRS1m0tZtFS1m1bWLUGeq59VrqudFSoCsgAAAPs01nTXF6GtXWdNEa1dZ1dajNa01nV1uM1rVZ01qMVoTTVYrWms6utMVdXWdNVlvTWdXRGtXWdNFb01nV0VrTUNRWjWdVFUQFVE01GlTUNRRLS1nRSpaWs2oFrNq2sWipax1Vtc+qis9VmrUCoArIAAAD6NNZHPHpb01jV0xG9XWNXRmt6azKutRitaus6a3GK1q6zpqsVrTWdNaYrWrrOmqw1q6yaI3q6xq6K3q6xq6K1qs6ajTWmppqKuiaDS6ampqKqaamopammpaKWs2lrNqKWsWraxaKnVc7V6rKKlRUVmgAgAAADsIMPSqAIumoCNSta56sqxmummsautxzrems6a051rV1nRWK0rKqy0ICNLrIqN6usauo1GtXWdNRqNausmitaazpqNLpqaaimppqaKalpalqKWs2lrNqKlrHVW1ztRorNVBKgCsgAAAAAOoIy7qIAACBqAjUq65rrcYrpprGrK05VvV1mVdVnGlZ1dVGhlRGhlVRV1ldQa1dZ1dGo1prOmo01prOmorWpqaaimmpqaKWpaWs2o0Ws2lrFqLEtZWoipUVFZoAIAAAAAA6AMuwICAAggKmiCLGautSsjcZdJV1zlalaZsb1dYlXRMb1dY1dGWlZNUaNTTRGtXWdNRY3prOmo01prOmorWpqaaNGpaalqKWs2lrNqKWsWlqJWhBEZoAqAAAAAAAANiCOmqICaCAmgIqaACCoqygqDcRqVZWF1pMdNXXOVdExvV1jV0TGtVnTRMaXWdNQa1dZ00VrTWdNRprU1NTUVdS1NZtGltZtLWUURUZBAGQAAAAAAAAAFEBdUQDVQBAAAAAAFEVqUAG0U1FUXV1k0TG9XWNXRMa01nTQxvTWdNRWtNTU1Fa1NTU0aW1m0RFARmgiojIAAAAAAAAAAAAAAAAAAAAAAAAACgNwAGkUQUUADV1AF01AF01BFUQRQEZoAjIACAAAAAAAAAAAAAAAAAAAAAAAAAACoqwAGkAGgABRAFEAUBFARABGaACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgNQAGkAAAFAAABFAGaCAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoqwAGgAVAAAAABAASqgDIAAAAAAAAAAAAAAAA/9k='

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false)

  const handleClick = () => setHasBorder(!hasBorder)

  const context = classNames.bind(styles)

  const buttonStyles = context('Description__button', {
    'Description__button--border': hasBorder,
  })

  return (
    <section className={styles.Description}>
      <button className={buttonStyles} onClick={handleClick}>
        <figure className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="Product marketplace"
            fill
            priority={false}
            quality={100}
            placeholder='blur'
            blurDataURL={placeholderImage}
          />
        </figure>
      </button>
      <div className={styles.Description__text}>
        <h2>Trae el futuro hoy</h2>
        <p>Future World: ¡su puerta de entrada a la tecnología del mañana! Sumérgete en un mundo de dispositivos y equipos de última generación. Manténgase a la vanguardia y redefina su estilo de vida digital con nosotros.</p>
      </div>
    </section>
  )
}
