import React from 'react';
import PropTypes from 'prop-types';

/**
 * Generate a Table of Contents using the provided array of section and subsection links.
 *
 * Example array:
 *  [
 *     {
 *       name: "Nebensatz",
 *       link: "#nebensatz",
 *       subsections : [
 *         {
 *           name: "Weil",
 *           link: "#weil",
 *         }
 *       ]
 *     },
 *  ]
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const TableOfContents = (props) => {
  const tocRender = props.sections.map((section) => {
    const sectionRender = <a href={`#${section.link}`} style={{color: "#25396f"}}>{section.name}</a>;
    let subsectionsRender = '';

    if (section.hasOwnProperty("subsections") && section.subsections.length > 0) {
      subsectionsRender = section.subsections.map((subsection) => {
        return <li key={subsection.link}><a href={`#${subsection.link}`} title={subsection.name} style={{color: "#25396f"}}>{subsection.name}</a></li>
      })
    }

    return <li key={section.link}>
      {sectionRender}
      <ul>
        {subsectionsRender}
      </ul>
    </li>
  })

  return (
    <>
      <h6>Inhaltsverzeichnis</h6>
      <ul className="mx-2 fst-italic" style={{fontSize: "14px"}}>
        {tocRender}
      </ul>
    </>
  )
}

TableOfContents.propTypes = {
  sections: PropTypes.array.isRequired,
}

export default TableOfContents;