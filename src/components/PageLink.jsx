const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};

export default PageLink;



// const PageLink = ({ link, itemClass }) => {
//     return (
//       <li key={link.id}>
//         <a href={link.href} className={itemClass}>
//           {link.text}
//         </a>
//       </li>
//     )
//   }
//   export default PageLink
  