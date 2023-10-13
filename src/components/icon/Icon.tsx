import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

// Rozhraní pro props komponenty Icon.
interface IProps {
  name: IconName; // Název ikony.
  type: IconPrefix; // Typ ikony (solid, brands, apod.).
  color: string; // Barva ikony.
}

library.add(fas); // Ikony solid (plné).
library.add(fab); // Ikony brands (značky).

export const Icon = ({ name, type, color }: IProps): JSX.Element => {
  return (
    <span className="icon">
      <FontAwesomeIcon icon={[type, name]} style={{ color: color }} />
    </span>
  );
};
