
import {Card, CardContent, Button} from '@mui/material'
import { styled } from '@mui/system'

const width = 350
const height = 75
//https://davidwalsh.name/css-flip
const baseCard = {
  backfaceVisibility: 'hidden',
	position: 'absolute',
	top: 0,
	left: 0
}

const FrontCard = styled(Button)({
  ...baseCard, width, height, zIndex: 2, transform: 'rotateY(0deg)'
})

const BackCard = styled(Button)({
  ...baseCard, width, height, transform: 'rotateY(180deg)'
})

const FlipCard = styled(CardContent)((props) => ({
  transition: '1.2s',
	transformStyle: 'preserve-3d',
	position: 'relative',
  transform: props.isflipped ? 'rotateY(180deg)' : undefined
}))

const FlipCardContainer = styled(Card)({
  perspective: '1000px',
  width, height
})

function BoardCard(props) {
  function flip(){
    if(!props.question.count) return 

    props.onClick(props.index -1, props.question)
  }

  return (
    <FlipCardContainer onClick={flip}>
      <FlipCard isflipped={props.question.isFlipped}>
        <FrontCard variant="contained" disabled={!props.question.count} disableElevation>{props.question.count > 0 ? props.index : ''}</FrontCard>
        <BackCard variant="outlined" disableElevation>{props.question.text} | {props.question.count}</BackCard>
      </FlipCard>
    </FlipCardContainer>
  );
}

export default BoardCard;
