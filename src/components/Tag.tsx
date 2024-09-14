import React from 'react';
import '../styles/Tag/Tag.css';

interface TagProps {
    tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
    return <span className="tag">{tag}</span>;
};

export default Tag;
