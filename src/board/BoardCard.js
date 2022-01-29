
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
  transition: '0.6s',
	transformStyle: 'preserve-3d',
	position: 'relative',
  transform: props.isflipped ? 'rotateY(180deg)' : undefined
}))

const FlipCardContainer = styled(Card)({
  perspective: '1000px',
  width, height
})

function BoardCard(props) {

  return (
    <FlipCardContainer>
      <FlipCard isflipped={props.question.isFlipped}>
        <FrontCard variant="contained" disableElevation>{props.index}</FrontCard>
        <BackCard variant="contained" disableElevation>{props.question.text} | {props.question.count}</BackCard>
      </FlipCard>
    </FlipCardContainer>
  );
}

export default BoardCard;
