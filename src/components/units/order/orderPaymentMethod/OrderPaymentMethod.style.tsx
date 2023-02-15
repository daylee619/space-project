import styled from '@emotion/styled'

export const Contain = styled.div`
    width: 100%;
    height: 100%;
`

export const Point = styled.div`
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: rgb(180, 49, 42);
    color: white;
    border: 1px solid lightgray;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`

export const Points = styled.div`
    margin: 25px 0 20px 15px;
    font-size: 25px;
`

export const PointsNumber = styled.span`
    border: 2px solid gray;
    border-radius: 5px;
    padding: 5px;
    margin-left: 20px;
`