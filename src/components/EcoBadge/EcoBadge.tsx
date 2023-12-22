import './EcoBadge.scss';

import getBadge from 'api/carbon-api';
import { Component, createResource, Show } from 'solid-js';

interface EcoBadgeProps {
  href: string;
}

const EcoBadge: Component<EcoBadgeProps> = (props: EcoBadgeProps) => {
  const [badge] = createResource(() => props.href, getBadge);
  return (
    <div id="external-link">
      <p id="developper">
        Ce site a été éco-conçu par l'entreprise{' '}
        <a href="https://nosfuturs.dev/" target="_blank">
          {' '}
          Nos Futurs
        </a>
      </p>
      <Show when={!badge.loading && badge()} fallback={<></>}>
        <p class="badge">
          <b>{badge().c.toString()}g</b> of CO<sub>2</sub>/vue, plus propre que <b>{badge().p.toString()}%</b> des
          pages testés
        </p>
        <p class="badge">
          Source{' '}
          <a id="wcb_a" target="_blank" rel="noopener" href="https://websitecarbon.com">
            Website Carbon
          </a>
        </p>
      </Show>
    </div>
  );
};

export default EcoBadge;
