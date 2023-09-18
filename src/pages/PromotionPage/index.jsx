import React from 'react';

import { useQuery } from '@tanstack/react-query';

import Layout from '../../components/Layout';
import { promotionService } from '../../services/promotion.service';

export default function PromotionPage() {
  const { data: promotionData, isLoading: isPromotionLoading} = useQuery(
    ["promotion"],
    () => promotionService.fetchAllPromotions(),
    {
      retry: 3,
      retryDelay: 1000.
    }
  );
  return (
    <Layout>
      <div className="article-page">
        <div className="art-category-group m-0">
          <a href="/may-khoe-may-dep">Máy Khỏe - Máy Đẹp</a>
          <a href="/tin-cong-nghe">Tin Công Nghệ</a>
          <a href="/review-san-pham">Review Sản Phẩm</a>
          <a href="/benchmarks">Benchmarks</a>
          <a href="/blog">Blog Thủ Thuật</a>
          <a href="/tin-game">Tin Tức Game</a>
          <a href="/wiki">Wiki</a>
          <a href="/tin-khuyen-mai" className="current">
            Tin Khuyến Mãi
          </a>
        </div>
      </div>

      <div className="article-page article-category-page">
        <div className="container">
          <div className="art-child-group">
            <h1 className="box-title">Tin Khuyến Mãi</h1>
            <div className="cat-child-list"></div>
          </div>
          <div className="article-list-container">
            {/**list promotion */}
            {promotionData?.map((item) => (
               <div className="art-item">
               <a href={`/tin-tuc/${item.slugPromotion}`} className="art-img">
                 <img
                   data-src={`${item.imagePromotion}`}
                   alt="Chương Trình Khuyến Mãi Giờ Vàng - Giá Sốc Tại Hoàng Hà PC"
                   width={1}
                   height={1}
                   className="lazy loaded"
                   src={`${item.imagePromotion}`}
                   data-was-processed="true"
                 />
                 <span className="art-cat">Tin Khuyến Mãi</span>
               </a>
               <div className="art-text">
                 <p className="art-time">
                   <span>
                     by <b>{item.userPromotion}</b>
                   </span>{" "}
                   |<time>{item.createdAt}</time>
                 </p>
                 <a href={`/tin-khuyen-mai/${item.slugPromotion}`} className="art-title">
                   <h3 className="inherit">
                    {item.titlePromotion}
                   </h3>
                 </a>
                 <div className="art-hover">
                   <div className="art-summary" dangerouslySetInnerHTML={{
                  __html: item.descriptionPromotion,
                    }}>
                   </div>
                   <a href={`/tin-khuyen-mai/${item.slugPromotion}`} className="art-btn">
                     Đọc chi tiết{" "}
                     <i className="fas fa-arrow-right" aria-hidden="true" />
                   </a>
                 </div>
               </div>
             </div>
            ))}
           
          </div>
          <div className="paging">
            <a href="/tin-khuyen-mai" className="current">
              1
            </a>
            <a href="/tin-khuyen-mai?page=2">2</a>
            <a href="/tin-khuyen-mai?page=3">3</a>
            <a href="/tin-khuyen-mai?page=4">4</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
