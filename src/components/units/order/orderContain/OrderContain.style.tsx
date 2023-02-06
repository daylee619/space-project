import styled from '@emotion/styled'

export const Contain = styled.div`
    width:100%;
    height: 100%;
`

export const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 15px;
`

export const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
`

interface IOrderContainCssPropsType {
    textHandle: boolean
}

export const ArrowIcon = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: lightgray;
    -webkit-transform: ${(props: IOrderContainCssPropsType) => props.textHandle && 'rotate(180deg)'};

    &:hover {
        cursor: pointer;
    }
`

export const ChildrenBox = styled.div`
    background-color: white;
    padding: 15px;
`