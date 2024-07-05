'use client'
import { useState } from 'react';
import { Box, Button, ButtonGroup, Textarea, Select, useMediaQuery } from '@chakra-ui/react';
import { BiBold } from "react-icons/bi";
import { MdFormatItalic } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { MdOutlineStrikethroughS } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { FaAlignCenter } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


function TextEditor() {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [textAlign, setTextAlign] = useState('left');
  const [textSize, setTextSize] = useState('12px');
  const [textColor, setTextColor] = useState('#000000');
  
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const handleTextChange = (e) => setText(e.target.value);

  const toggleBold = () => setIsBold(!isBold);
  const toggleItalic = () => setIsItalic(!isItalic);
  const toggleUnderline = () => setIsUnderline(!isUnderline);
  const toggleStrikethrough = () => setIsStrikethrough(!isStrikethrough);
  const setAlignment = (alignment) => setTextAlign(alignment);
  const handleTextSizeChange = (e) => setTextSize(e.target.value);
  const handleTextColorChange = (e) => setTextColor(e.target.value);

  const getComputedStyle = () => {
    let style = {};
    if (isBold) style.fontWeight = 'bold';
    if (isItalic) style.fontStyle = 'italic';
    if (isUnderline || isStrikethrough) style.textDecoration = `${isUnderline ? 'underline' : ''} ${isStrikethrough ? 'line-through' : ''}`.trim();
    style.textAlign = textAlign;
    style.fontSize = textSize;
    style.color = textColor;
    return style;
  };

  return (
    <Box p={2} w="100%" mx="auto">
      <ButtonGroup mb={2} display="flex" flexWrap="wrap" justifyContent="center">
        <Button onClick={toggleBold} colorScheme={isBold ? 'teal' : 'gray'} mx={0.2} size="xs">
          <BiBold />
        </Button>
        <Button onClick={toggleItalic} colorScheme={isItalic ? 'teal' : 'gray'} mx={1} size="xs">
          <MdFormatItalic />
        </Button>
        <Button onClick={toggleUnderline} colorScheme={isUnderline ? 'teal' : 'gray'} mx={1} size="xs">
          <MdFormatUnderlined />
        </Button>
        <Button onClick={toggleStrikethrough} colorScheme={isStrikethrough ? 'teal' : 'gray'} mx={1} size="xs">
          <MdOutlineStrikethroughS />
        </Button>
        <Button onClick={() => setAlignment('left')} colorScheme={textAlign === 'left' ? 'teal' : 'gray'} mx={1} size="xs">
          <FaAngleLeft />
        </Button>
        <Button onClick={() => setAlignment('center')} colorScheme={textAlign === 'center' ? 'teal' : 'gray'} mx={1} size="xs">
          <FaAlignCenter />
        </Button>
        <Button onClick={() => setAlignment('right')} colorScheme={textAlign === 'right' ? 'teal' : 'gray'} mx={1} size="xs">
          <FaChevronRight />
        </Button>
       
        <Select value={textSize} onChange={handleTextSizeChange} width="auto" ml={isLargerThan480 ? 2 : 1} mb={isLargerThan480 ? 0 : 2} size="xs">
          <option value="2px">2px</option>
          <option value="4px">4px</option>
          <option value="6px">6px</option>
          <option value="8px">8px</option>
          <option value="10px">10px</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
          <option value="32px">32px</option>
        </Select>
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
          style={{ marginLeft: isLargerThan480 ? '8px' : '4px', border: 'none', backgroundColor: 'transparent', height: '30px', width: '30px' }}
          />
      </ButtonGroup>
      <Textarea 
        value={text}
        onChange={handleTextChange}
        placeholder="Type your text here..."
        style={getComputedStyle()}
        p={2}
        borderColor="gray.300"
        borderRadius="md"
        _hover={{ borderColor: 'gray.400' }}
        _focus={{ borderColor: 'teal.500' }}
        size="xs"
      />
    </Box>
  );
}

export default TextEditor;
