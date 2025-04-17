---
import { Icon } from '@astrojs/starlight/components';
interface Props {
  title: string;
  description: string;
  link?: string;
  icon?: string;
}

const { title, description, link, icon } = Astro.props;
---

<div class="bg-white rounded-lg shadow-md p-6 !mt-0 relative border bottom-0 hover:bottom-2 transition-all duration-300">
  {icon && <Icon name={icon} class='!text-[#09C0A1]' />}
  <h3 class="text-xl font-semibold text-gray-800 !mt-3">
    {title}
  </h3>
  <p class="text-gray-600 mb-4">{description}</p>
  <a href={link} class='!text-[#09C0A1]'>Learn more →</a>
</div>
