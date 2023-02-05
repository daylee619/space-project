import { Router, useRouter } from 'next/router'
import { useState } from 'react'
import { INavSubCategoryPropsType } from '../Navigation.type'
import * as S from './NavSubCategory.style'

const NavSubCategory = (props: INavSubCategoryPropsType) => {
    const { subCategoryData, pointerLeaveHandelr } = props

    const [imgState, setImgState] = useState<number>()

    const router = useRouter()

    const imgStateHandler = (id?: number) => {
        setImgState(id)
    }
    const imgLeaveHandler = () => {
        setImgState(0)
    }

    return (
        <>
            {/* <S.Shadow /> */}
            <S.SubCategoryContain onPointerLeave={pointerLeaveHandelr}>
                <S.Box>
                    <S.NamingBox>
                        <S.NamingCategoryBox>
                            {subCategoryData.namingCategoies?.map(item =>
                                <S.NamingCategory
                                    key={item.namingId}
                                >
                                    {item.namingName}
                                </S.NamingCategory>
                            )
                            }
                        </S.NamingCategoryBox>
                        <S.SubCategoryBox>
                            {
                                subCategoryData.subCategories?.map(item =>
                                    <S.SubCategory
                                        key={item.id}
                                    >
                                        {item.name}
                                    </S.SubCategory>
                                )
                            }
                        </S.SubCategoryBox>
                    </S.NamingBox>
                    <S.ProductImgContain
                        onPointerLeave={imgLeaveHandler}
                    >
                        {subCategoryData.productInfo?.map(item =>
                            item !== null
                            &&
                            <div key={item?.productId}>
                                <S.ProductImgBox
                                    onPointerEnter={() => { imgStateHandler(item?.productId); }}
                                >
                                    <S.ProductImg src={item?.thumbnail} alt={item?.productName} />
                                </S.ProductImgBox>
                                {
                                    imgState === item?.productId
                                    &&
                                    <S.ProductImgShadow>
                                        <span>{item?.productName}</span>
                                        <span>{item?.price}</span>
                                    </S.ProductImgShadow>
                                }
                            </div>
                        )
                        }
                    </S.ProductImgContain>
                </S.Box>
            </S.SubCategoryContain>
        </>
    )
}

export default NavSubCategory