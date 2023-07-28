import { Icon } from '@iconify/react';

function Social({ icons }) {
  const styles =
    'flex items-center [&>*]:m-1 text-[#64748B] hover:text-purple-500 duration-300 text-xl';

  if (icons?.length === 1) {
    const { link, icon, name } = icons[0];

    return (
      <div className='flex'>
        <a href={link} className={styles}>
          <Icon icon={icon} width='25' height='25' />
          <span>{name}</span>
        </a>
      </div>
    );
  }

  return (
    <div className='md:grid md:grid-cols-2 gap-y-1 flex flex-wrap [&>a]:mr-4'>
      {icons.map(icon => (
        <a href={icon.link} className={styles}>
          <Icon icon={icon.icon} width='25' height='25' />
          <span>{icon.name}</span>
        </a>
      ))}
    </div>
  );
}

export default Social;
