import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 20px;
`

export const PageTitle = styled.div`
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 12px;
    border-bottom: 2px solid black;
    margin-bottom: 30px;
`

export const TegReviewTitle = styled.div`
    display: flex;
    border-bottom: 1px solid lightgray;
`

interface IMypageReivewCssType {
    option: string
}

export const PossibleReview = styled.div`
    margin-right: 30px;
    padding: 0 5px 10px 5px;
    font-size: 13px;
    font-weight: 700;
    
    color: ${(props: IMypageReivewCssType) => props.option === 'possible_review' ? 'black' : 'lightgray'};
    border-bottom: ${(props: IMypageReivewCssType) => props.option === 'possible_review' ? '3px solid black' : undefined};

    &:hover {
        cursor: pointer;
    }
`

export const WritedReview = styled.div`
    margin-right: 30px;
    padding: 0 5px 10px 5px;
    font-size: 13px;
    font-weight: 700;
    
    color: ${(props: IMypageReivewCssType) => props.option === 'writed_review' ? 'black' : 'lightgray'};
    border-bottom: ${(props: IMypageReivewCssType) => props.option === 'writed_review' ? '3px solid black' : undefined};

    &:hover {
        cursor: pointer;
    }
`

export const ReviewBox = styled.div`
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`