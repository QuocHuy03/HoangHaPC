import React, {
  useEffect,
  useState,
} from 'react';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import Layout from '../../components/Layout';
import { blogService } from '../../services/blog.service';
import { promotionService } from '../../services/promotion.service';

export default function PromotionDetailPage() {
  const { slug } = useParams();
  const [isSlug, setSlug] = useState(null);
  useEffect(() =>{
    if(slug) {
      setSlug(slug)
    }
  }, [slug]);

  const { data: blogData, isLoading: blogIsLoading } = useQuery(
    ["blog"],
    () => blogService.fetchAllBlogs(),
    {
      retry: 3,
      retryDelay: 1000,
    }
  );
  const { data, isLoading} = useQuery({
    queryKey: ['edit-promotion', isSlug],
    queryFn: () => promotionService.fetchPromotionBySlug(isSlug),
    staleTime: 500,
    enabled: !!isSlug,
  }) 

  return (
    <Layout>
    <div className="article-page">
        <div className="art-category-group m-0">
          <a href="/may-khoe-may-dep">Máy Khỏe - Máy Đẹp</a><a href="/tin-cong-nghe">Tin Công Nghệ</a><a href="/review-san-pham">Review Sản Phẩm</a><a href="/benchmarks">Benchmarks</a><a href="/blog">Blog Thủ Thuật</a><a href="/tin-game">Tin Tức Game</a><a href="/wiki">Wiki</a><a href="/tin-khuyen-mai" className="current">Tin Khuyến Mãi</a>
        </div>
      </div>

      <div className="article-detail-page">
        <div className="container">
          <div className="row">
            <div className="col-8 art-detail-col-left">
              <h1 className="art-detail-title">{data?.result.titlePromotion}</h1>
              <p className="art-detail-author">Đăng bởi <b>{data?.result.userPromotion}</b></p>
              <div className="art-detail-content"
              dangerouslySetInnerHTML={{
                  __html: data?.result.contentPromotion,
                }} id="js-find_toc">
              </div>
              {/* <div className="art-detail-content" id="js-find_toc"><p><strong>Xây dựng bộ máy siêu chất tại&nbsp;<span style={{color: '#ff0000'}}><a style={{color: '#ff0000'}} title="Hoàng Hà PC" href="https://hoanghapc.vn/">Hoàng Hà PC</a></span> từ các linh kiện TUF của Asus và nhận ngay quà khủng với tổng trị giá lên tới 15 triệu đồng.</strong></p>
                <h2 style={{textAlign: 'center'}} id="khuyen-mai"><span style={{color: '#ff0000'}} id="khuyen-mai"><strong id="khuyen-mai">KHUYẾN MẠI</strong></span></h2>
                <h2 style={{textAlign: 'center'}} id="build-pc-full-tuf-nhan-qua-cuc-chat"><span style={{color: '#ff0000'}} id="build-pc-full-tuf-nhan-qua-cuc-chat"><strong id="build-pc-full-tuf-nhan-qua-cuc-chat">BUILD PC FULL TUF - NHẬN QUÀ CỰC CHẤT</strong></span></h2>
                <p><span style={{color: '#ff0000'}}><strong><img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/TSeq0Pq.jpg" alt="BUILD PC FULL TUF - NHẬN QUÀ CỰC CHẤT" width={660} height={392} /></strong></span></p>
                <p><strong>1. Thời gian khuyến mại:</strong>&nbsp;Từ <strong>01/03/2023</strong>&nbsp;đến&nbsp;<strong>30/04/2023&nbsp;</strong>hoặc cho đến khi hết quà</p>
                <p><strong>2.&nbsp;Hạn chót đăng ký nhận quà:&nbsp;<strong>05/05/2023</strong></strong></p>
                <p><strong>3. Đối tượng hưởng khuyến mại:</strong>&nbsp;Người dùng cuối</p>
                <p><strong>4. Nội dung khuyến mại:</strong>&nbsp;</p>
                <p><span style={{fontFamily: 'Arial, sans-serif', color: 'black'}}>-&nbsp;</span><span style={{fontFamily: 'Arial, sans-serif'}}>Mua Bo mạch chủ + Card đồ họa + Case + Nguồn + Tản + Màn hình + Thiết bị ngoại vi router + Bàn phím + Tai nghe + Chuột, tặng&nbsp;<strong>Giá đỡ card ROG HERCULX + Box SSD ASUS TUF Gaming A1 + áo thun EVA +&nbsp; áo khoác ASUS TUF Gaming phiên bản giới hạn + đồng hồ ASUS Vivowatch 5 (hoặc ghế Gaming ROG Chariot Core tổng trị giá&nbsp;<span style={{color: 'red', fontSize: '14pt'}}>15,000,000đ</span></strong></span></p>
                <p>- Mua Bo mạch chủ + Card đồ họa + Case + Nguồn + Tản, tặng&nbsp;<strong>Giá đỡ card ROG HERCULX +&nbsp; Box SSD ASUS TUF Gaming A1 tổng trị giá&nbsp;<span style={{color: 'red', fontSize: '14pt'}}>2,220,000đ</span></strong></p>
                <p>- Mua Bo mach chủ + Card đồ họa + Màn hình, tặng&nbsp;<strong>Giá đỡ card ROG HERCULX +&nbsp; Áo thun EVA phiên bản giới hạn tổng trị giá&nbsp;<span style={{color: 'red', fontSize: '14pt'}}>2,000,000đ</span></strong></p>
                <p>- Mua Bo mach chủ + Card đồ họa + Thiết bị ngoại vi router, tặng&nbsp;<strong>Giá đỡ card ROG HERCULX +&nbsp; Áo khoác ASUS TUF Gaming phiên bản giới hạn tổng trị giá&nbsp;<span style={{color: 'red', fontSize: '14pt'}}>2,000,000đ</span></strong></p>
                <p>- Mua Bo mach chủ + Card đồ họa + Bàn phím + Tai nghe + Chuột, tặng&nbsp;<strong>Giá đỡ card ROG HERCULX +&nbsp; Áo khoác ASUS TUF Gaming phiên bản giới hạn tổng trị giá&nbsp;<span style={{color: 'red', fontSize: '14pt'}}>2,000,000đ</span></strong></p>
                <p>- Mua Bo mạch chủ + Card đồ họa, tặng&nbsp;<strong>Giá đỡ card ROG HERCULX trị giá&nbsp;<span style={{color: 'red', fontSize: '14pt'}}>1,070,000đ</span></strong></p>
                <p><strong><span style={{color: 'red', fontSize: '14pt'}}><img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/zxwUcyk.jpg" alt="BUILD PC FULL TUF - NHẬN QUÀ CỰC CHẤT" width={660} height={238} /></span></strong></p>
                <p>&nbsp;</p>
                <p><img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src="https://i.imgur.com/3ird2wq.jpg" alt="BUILD PC FULL TUF - NHẬN QUÀ CỰC CHẤT" width={660} height={1023} /></p>
                <p><strong>5.&nbsp;Cách thức nhận quà:</strong></p>
                <p>Click vào nút “Đăng kí” trên website sự kiện <span style={{color: '#0000ff'}}><a style={{color: '#0000ff'}} href="https://www.asus.com/vn/events/infoM/activity_TUF/">https://www.asus.com/vn/events/</a></span></p>
                <p>Lưu ý: Trong trường hợp không thể đăng ký trên hệ thống, quý khách hàng vui lòng gửi thông tin nhận quà như bên dưới về địa chỉ Email: <span style={{color: '#0000ff'}}><a style={{color: '#0000ff'}} href="mailto:dangkyasus@gmail.com">dangkyasus@gmail.com</a></span>&nbsp;với tiêu đề: “[Khuyen mai] TUF Gaming”</p>
                <p>- Đính kèm hình ảnh hóa đơn mua hàng, phiếu thu, phiếu xuất kho có dấu xác nhận của cửa hàng, thể hiện rõ tên sản phẩm và ngày mua hàng trong thời gian chương trình diễn ra.</p>
                <p>- Đính kèm ảnh chụp số S/N của sản phẩm</p>
                <p>- Điền series của sản phẩm:</p>
                <p>- Điền Họ và tên người nhận quà</p>
                <p>- Điền Địa chỉ nhận quà</p>
                <p>- Điền Số điện thoại liên hệ</p>
                <p>Hình chụp số S/N trên sản phẩm phải chụp kèm với hoá đơn, chỉ chấp nhận hình chụp số S/N trên sản phẩm, số S/N trên hộp không có hiệu lực.</p>
                <p><strong>6. Các lưu ý khác:</strong></p>
                <p>- ASUS sẽ kiểm tra và liên hệ gửi quà tới bạn trong 20 ngày làm việc (ngoại trừ thứ 7 &amp; Chủ nhật)</p>
                <p>- Chương trình không áp dụng đồng thời với các chương trình khuyến mãi khác.</p>
                <p>- Quà tặng không có giá trị quy đổi thành tiền mặt hoặc các giá trị khác tương đương.</p>
                <p>- Hóa đơn/ phiếu thu/ phiếu xuất kho phải có con dấu của cửa hàng bán lẻ.</p>
                <p>- Dung lượng hình ảnh hóa đơn tải lên hệ thống &lt;1Mb.</p>
                <p>- Trong trường hợp cần thiết nhằm bảo đảm quyền lợi khách hàng, phía ASUS sẽ cần thêm những thông tin khác để xác định khách mua hàng là chính xác như: hóa đơn đỏ, giấy tờ tùy thân có ảnh đại diện...</p>
                <p>- Mọi góp ý hay thắc mắc khác về chương trình, xin vui lòng post tại <strong>Hội linh kiện PC ASUS ROG Việt Nam.</strong></p></div> */}
              <div className="art-detail-info">
                <div className="art-info-title">
                  <span className="info-img">
                    <img data-src="https://hoanghapc.vn/template/2022/images/logo-thumb.png" alt="Tin tức" width={1} height={1} className="lazy w-auto h-auto loaded" src="https://hoanghapc.vn/template/2022/images/logo-thumb.png" data-was-processed="true" />
                  </span> 
                  <p className="info-title">
                    <b>Hoàng Hà PC</b>
                    <time>15/02/2022</time>
                  </p>
                </div>
                <p className="info-content">
                  Hoàng Hà PC là một Công ty hoạt động trong lĩnh vực kinh doanh Server - Workstation - Máy Tính Đồ Họa, PC nguyên chiếc, lắp ráp máy tính thương hiệu HoangHaPC và phân phối các sản phẩm CNTT.
                </p>
              </div>
            </div>
            <div className="col-4 art-detail-col-right">
              <div id="js-archor-holder"><div id="js-first-paragraph"><div className="archor-list-group" id="js-archor-list"><ol><li><a href="#khuyen-mai"><span style={{color: '#ff0000'}}><strong>KHUYẾN MẠI</strong></span></a></li><li><a href="#build-pc-full-tuf-nhan-qua-cuc-chat"><span style={{color: '#ff0000'}}><strong>BUILD PC FULL TUF - NHẬN QUÀ CỰC CHẤT</strong></span></a></li></ol></div></div></div>
              <div className="art-right-box">
                <p className="box-title"><span>Bài viết mới nhất</span></p>
                <div className="art-holder">
                  {blogData?.map((item) =>(
                      <div className="art-item">
                      <a href={`/tin-tuc/${item.slugBlog}`} className="art-img">
                      <img
                        data-src={`${item.imageBlog}`}
                        alt="10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️"
                        width={1}
                        height={1}
                        className="lazy loaded"
                        src={`${item.imageBlog}`}
                        data-was-processed="true"
                      />
                        <span className="art-cat">{item.titleBlog}</span>
                      </a>
                      <div className="art-text">
                        <p className="art-time">
                          <span>by <b>{item.userBlog}</b></span> | 
                          <time>{item.createdAt}</time>
                        </p>
                        <a href={`/tin-tuc/${item.slugBlog}`} className="art-title"><h3 className="inherit">{item.titleBlog}</h3></a>
                        <div className="art-hover">
                          <div className="art-summary">Cấu hình máy tính đồ họa chuyên dụng cho công việc thiết kế đồ họa, làm phim, Render và xử lý các thuật toán AI trí tuệ nhân tạo phù hợp nhất mọi công việc.</div>
                          <a href={`/tin-tuc/${item.slugBlog}`} className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                </div>
              </div>
              <div className="art-right-box">
                <p className="box-title"><span>Bài viết được xem nhiều</span></p>
                <div className="art-holder">
                  <div className="art-item">
                    <a href="/cau-hinh-may-tinh-do-hoa" className="art-img">
                      <img data-src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg" alt="10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️" width={1} height={1} className="lazy loaded" src="https://hoanghapccdn.com/media/news/14_pc_do_hoa_hoanghapc_min.jpg" data-was-processed="true" />
                      <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="art-text">
                      <p className="art-time">
                        <span>by <b>Mai Văn Học</b></span> | 
                        <time>28-08-2023, 10:25 am</time>
                      </p>
                      <a href="/cau-hinh-may-tinh-do-hoa" className="art-title"><h3 className="inherit">10 Cấu Hình Máy Tính Đồ Họa Theo Ngân Sách✔️</h3></a>
                      <div className="art-hover">
                        <div className="art-summary">Cấu hình máy tính đồ họa chuyên dụng cho công việc thiết kế đồ họa, làm phim, Render và xử lý các thuật toán AI trí tuệ nhân tạo phù hợp nhất mọi công việc.</div>
                        <a href="/cau-hinh-may-tinh-do-hoa" className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="art-item">
                    <a href="/cau-hinh-may-tinh-chay-gia-lap-nox-player" className="art-img">
                      <img data-src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg" alt="Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer" width={1} height={1} className="lazy loaded" src="https://hoanghapccdn.com/media/news/18_pc_gia_lap_1.jpg" data-was-processed="true" />
                      <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="art-text">
                      <p className="art-time">
                        <span>by <b>Mai Văn Học</b></span> | 
                        <time>04-07-2023, 3:17 pm</time>
                      </p>
                      <a href="/cau-hinh-may-tinh-chay-gia-lap-nox-player" className="art-title"><h3 className="inherit">Cấu Hình Máy Tính Chạy Giả Lập Nox Player, LDPlayer</h3></a>
                      <div className="art-hover">
                        <div className="art-summary">Cấu hình máy tính chạy giả lập trên Noxplayer, LD Player, chạy 10 tab, 20 tab, 30 tab giả lập mượt, chơi mọi game mobile giá cực rẻ tại Hoàng Hà PC.</div>
                        <a href="/cau-hinh-may-tinh-chay-gia-lap-nox-player" className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="art-item">
                    <a href="/cau-hinh-may-tinh-dung-phim" className="art-img">
                      <img data-src="https://hoanghapccdn.com/media/news/19_10_cau_hinh_6.jpg" alt="17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo Ngân Sách 2023" width={1} height={1} className="lazy loaded" src="https://hoanghapccdn.com/media/news/19_10_cau_hinh_6.jpg" data-was-processed="true" />
                      <span className="art-cat">Máy Khỏe - Máy Đẹp</span>
                    </a>
                    <div className="art-text">
                      <p className="art-time">
                        <span>by <b>Mai Văn Học</b></span> | 
                        <time>04-07-2023, 3:16 pm</time>
                      </p>
                      <a href="/cau-hinh-may-tinh-dung-phim" className="art-title"><h3 className="inherit">17 Cấu Hình Máy Tính Dựng Phim, Render Edit Video Theo Ngân Sách 2023</h3></a>
                      <div className="art-hover">
                        <div className="art-summary">Sức mạnh của bộ máy tính chuyên dụng dành cho làm phim, Render Edit Video sẽ giúp các nhà sản xuất tối ưu hơn về thời gian và nâng cao chất lượng sản phẩm.</div>
                        <a href="/cau-hinh-may-tinh-dung-phim" className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="art-right-box" id="js-product-saleoff-container">
                <p className="box-title"><span>Sản phẩm khuyến mãi</span></p>
                <div className="product-holder position-relative" id="js-product-saleoff-holder">
                  <div className="p-item">
                    <a href="/cpu-intel-core-i9-13900k" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_3547_13900k_sale_t5_2023_l1s.jpg" alt="CPU Intel Core i9-13900K (5.8 GHz, 24 Nhân 32 Luồng, 36M Cache, Raptor Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i9-13900k" className="p-name"><h3 className="inherit">CPU Intel Core i9-13900K (5.8 GHz, 24 Nhân 32 Luồng, 36M Cache, Raptor Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">10.690.000 đ</span>
                        <del className="p-old-price">16.800.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 37%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(3547, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i9-13900K (5.8 GHz, 24 Nhân 32 Luồng, 36M Cache, Raptor Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">10.690.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">CPU Intel Core i9-13900K
                            </div><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi/luồng: 24/32
                            </div><div className="item">Bộ nhớ đệm: 36 MB
                            </div><div className="item">Bus ram hỗ trợ: DDR4 3200MHz, DDR5-5600MHz
                            </div><div className="item">Công suất tiêu thụ: 125W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i9 13900K chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}> 10.690.000đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i9 13900K là: 12.990.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau:&nbsp;<span>VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i7-13700kf" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_3593_13700kf_sale_t8_2023_s1.jpg" alt="CPU Intel Core i7-13700KF (5.4GHz, 16 Nhân 24 Luồng, 30M Cache, Raptor Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i7-13700kf" className="p-name"><h3 className="inherit">CPU Intel Core i7-13700KF (5.4GHz, 16 Nhân 24 Luồng, 30M Cache, Raptor Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">7.190.000 đ</span>
                        <del className="p-old-price" />
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(3593, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i7-13700KF (5.4GHz, 16 Nhân 24 Luồng, 30M Cache, Raptor Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">7.190.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi - luồng: 16 nhân 24 luồng
                            </div><div className="item">Bộ nhớ đệm: 30MB
                            </div><div className="item">Bus ram hỗ trợ: DDR4-3200MHz, DDR5-5600MHz
                            </div><div className="item">Công suất tiêu thụ: 125W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i7 13700KF chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}> 7.190.000đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i7 13700KF là: 8.880.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau:&nbsp;<span style={{fontSize: '12pt'}}>VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i5-13400" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_3595_core_i5_13400_sale_t7_2023.jpg" alt="CPU Intel Core i5-13400 (Up To 4.60GHz,10 Nhân 16 Luồng,20MB Cache, Raptor Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i5-13400" className="p-name"><h3 className="inherit">CPU Intel Core i5-13400 (Up To 4.60GHz,10 Nhân 16 Luồng,20MB Cache, Raptor Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">3.990.000 đ</span>
                        <del className="p-old-price">6.000.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 34%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(3595, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i5-13400 (Up To 4.60GHz,10 Nhân 16 Luồng,20MB Cache, Raptor Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">3.990.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">CPU Intel Core i5-13400
                            </div><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi/luồng: 10/16
                            </div><div className="item">Bộ nhớ đệm: 20 MB
                            </div><div className="item">Bus ram hỗ trợ: DDR4 3200MHz, DDR5-4800
                            </div><div className="item">Mức tiêu thụ điện: 65W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i5 13400 chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}>3.990.000đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i5 13400 là: 4.990.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}} data-mce-mark={1}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau:&nbsp;<span style={{fontSize: '12pt'}}>VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i9-12900k" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_2906_cpu_intel_core_i9_12900k_sale_t6_2023.jpg" alt="CPU Intel Core i9-12900K (5.20GHz, 16 Nhân 24 Luồng, 30M Cache, Alder Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i9-12900k" className="p-name"><h3 className="inherit">CPU Intel Core i9-12900K (5.20GHz, 16 Nhân 24 Luồng, 30M Cache, Alder Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">6.990.000 đ</span>
                        <del className="p-old-price">14.899.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 54%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(2906, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i9-12900K (5.20GHz, 16 Nhân 24 Luồng, 30M Cache, Alder Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">6.990.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">CPU Intel Core i9-12900K
                            </div><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi/luồng: 16/24
                            </div><div className="item">Bộ nhớ đệm: 30 MB
                            </div><div className="item">Bus ram hỗ trợ: DDR4 3200MHz, DDR5-4800
                            </div><div className="item">Mức tiêu thụ điện: 125W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i9 12900K chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}>6.990.000đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i9 12900K là: 8.890.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau:&nbsp;<span style={{fontSize: '12pt'}}>VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i5-12400f" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_2912_cpu_12400f_sale_t7_2023s.jpg" alt="CPU Intel Core i5-12400F (Up To 4.40GHz, 6 Nhân 12 Luồng,18MB Cache, Alder Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i5-12400f" className="p-name"><h3 className="inherit">CPU Intel Core i5-12400F (Up To 4.40GHz, 6 Nhân 12 Luồng,18MB Cache, Alder Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">2.980.000 đ</span>
                        <del className="p-old-price">5.099.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 42%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(2912, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i5-12400F (Up To 4.40GHz, 6 Nhân 12 Luồng,18MB Cache, Alder Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">2.980.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">CPU Intel Core i5-12400F
                            </div><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi/luồng: 6/12
                            </div><div className="item">Bộ nhớ đệm: 18 MB
                            </div><div className="item">Bus ram hỗ trợ: DDR4 3200MHz, DDR5-4800
                            </div><div className="item">Mức tiêu thụ điện: 65W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i5 12400F chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}>2.980.000đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i5 12400F là: 3.590.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau: VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i7-12700k" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_2905_i7_12700k_sale_t7_2023_s1.jpg" alt="CPU Intel Core i7-12700K (Up To 5.00GHz, 12 Nhân 20 Luồng, 25M Cache, Alder Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i7-12700k" className="p-name"><h3 className="inherit">CPU Intel Core i7-12700K (Up To 5.00GHz, 12 Nhân 20 Luồng, 25M Cache, Alder Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">5.290.000 đ</span>
                        <del className="p-old-price">10.499.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 50%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(2905, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i7-12700K (Up To 5.00GHz, 12 Nhân 20 Luồng, 25M Cache, Alder Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">5.290.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi - luồng: 12 nhân 20 luồng
                            </div><div className="item">Bộ nhớ đệm: 25MB
                            </div><div className="item">Bus ram hỗ trợ: DDR4 3200MHz, DDR5 4800MHz
                            </div><div className="item">Mức tiêu thụ điện: 125W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i7 12700K chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}>5.290.000 đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i7 12700K là: 6.590.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau:&nbsp;<span>VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/mainboard-gigabyte-z690-aorus-master" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_2917_hot_z690_aorus_master_1.jpg" alt="Mainboard Gigabyte Z690 AORUS MASTER (Intel Z690, Socket 1700, E-ATX, 4 khe RAM DDR5)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/mainboard-gigabyte-z690-aorus-master" className="p-name"><h3 className="inherit">Mainboard Gigabyte Z690 AORUS MASTER (Intel Z690, Socket 1700, E-ATX, 4 khe RAM DDR5)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">8.600.000 đ</span>
                        <del className="p-old-price">12.490.000 đ</del>
                        <span className="p-discount">(Tiết kiệm: 32%)</span>
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(2917, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">Mainboard Gigabyte Z690 AORUS MASTER (Intel Z690, Socket 1700, E-ATX, 4 khe RAM DDR5)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">8.600.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">Mainboard Gigabyte Z690 AORUS MASTER 
                            </div><div className="item">Chuẩn mainboard: E-ATX
                            </div><div className="item">Socket: 1700
                            </div><div className="item">Chipset: Z690</div></div>
                        </div>
                      </div>
                    </div>                
                  </div>
                  <div className="p-item">
                    <a href="/cpu-intel-core-i5-13500" className="p-img">
                      <img src="https://hoanghapccdn.com/media/product/250_4020_13500_sale_hot_t6_2023.jpg" alt="CPU Intel Core i5-13500 (Up To 4.8 GHz, 14 Nhân 20 Luồng, 24M Cache, Raptor Lake)" width={250} height={250} />
                    </a>
                    <div className="p-text">
                      <a href="/cpu-intel-core-i5-13500" className="p-name"><h3 className="inherit">CPU Intel Core i5-13500 (Up To 4.8 GHz, 14 Nhân 20 Luồng, 24M Cache, Raptor Lake)</h3></a>
                      <div className="p-price-group">
                        <span className="p-price">4.990.000 đ</span>
                        <del className="p-old-price" />
                      </div>
                      <div className="p-btn-group">
                        <p>
                          <span style={{color: '#0DB866'}}><i className="icons icon-check" /> Còn hàng</span>
                          <span style={{color: '#A3A3A3'}}><i className="icons icon-gift" /> Quà tặng</span>                            
                        </p>
                        <a href="javascript:void(0)" className="p-add-cart" onclick="addProductToCart(4020, 1,'')" />
                      </div>
                    </div>
                    <div className="p-tooltip">
                      <p className="tooltip-title">CPU Intel Core i5-13500 (Up To 4.8 GHz, 14 Nhân 20 Luồng, 24M Cache, Raptor Lake)</p>
                      <div className="tooltip-content">
                        <table>
                          <tbody><tr>
                              <td>Giá bán</td>
                              <td>
                                <span className="tooltip-price">4.990.000 đ</span>
                              </td>
                            </tr>
                            <tr><td>Bảo hành</td><td>36 Tháng</td></tr>
                          </tbody></table>
                        <div className="tooltip-content-item"> 
                          <b className="title"><i className="tooltip-icon icon-doc" /> Thông số sản phẩm</b>
                          <div className="tooltip-content-list"><div className="item">Socket: FCLGA1700
                            </div><div className="item">Số lõi - luồng: 14 nhân 20 luồng
                            </div><div className="item">Bộ nhớ đệm: 24MB
                            </div><div className="item">Bus RAM hỗ trợ: DDR4 3200MHz, DDR5 4800MHz
                            </div><div className="item">TDP: 65W</div></div>
                        </div>
                        <div className="tooltip-content-item">
                          <b className="title"><i className="tooltip-icon icon-gift" /> Chương trình khuyến mãi</b>
                          <div className="tooltip-content-list"><div className="item"><p>⭐ <span style={{color: '#ff0000', fontSize: '12pt'}}><strong>Giá khuyến mãi CPU i5 13500 chỉ còn <span style={{fontSize: '18pt', color: '#008000'}}>4.990.000 đ</span> áp dụng khi build PC tại Hoàng Hà PC</strong></span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Giá bán lẻ CPU i5 13500 là: 5.750.000đ </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ LƯU Ý: Chương trình không áp dụng cộng dồn với các chương trình khác </span></p>
                            </div><div className="item"><p><span style={{fontSize: '12pt'}}>⭐ Chương trình áp dụng với khách hàng Build PC có đủ thêm 7 linh kiện sau:&nbsp;<span>VGA,TẢN NHIỆT, MAIN, RAM, SSD, NGUỒN , VỎ CASE</span></span></p></div></div>
                        </div>                
                      </div>
                    </div>                
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 art-detail-related-group">
              <p className="box-title">Bài viết liên quan</p>
              <div className="d-flex flex-wrap">
                <div className="art-item">
                  <a href="/build-may-khung-nhan-ram-chat" className="art-img">
                    <img data-src="https://hoanghapccdn.com/media/news/1193_build_pc_nhan_ram_min.png" alt="Build Máy Khủng, Nhận Ram Chất" width={1} height={1} className="lazy loaded" src="https://hoanghapccdn.com/media/news/1193_build_pc_nhan_ram_min.png" data-was-processed="true" />
                    <span className="art-cat">Tin Khuyến Mãi</span>
                  </a>
                  <div className="art-text">
                    <p className="art-time">
                      <span>by <b>Mai Văn Học</b></span> | 
                      <time>21-03-2023, 3:45 pm</time>
                    </p>
                    <a href="/build-may-khung-nhan-ram-chat" className="art-title"><h3 className="inherit">Build Máy Khủng, Nhận Ram Chất</h3></a>
                    <div className="art-hover">
                      <div className="art-summary">Khi khách hàng build PC sử dụng combo CPU AMD Ryzen 7000 series và mainboard ASUS tuỳ theo mã sản phẩm sẽ nhận được quà tặng là RAM Kingston</div>
                      <a href="/build-may-khung-nhan-ram-chat" className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                <div className="art-item">
                  <a href="/uu-dai-danh-cho-khach-hang-doanh-nghiep" className="art-img">
                    <img data-src="https://hoanghapccdn.com/media/news/1189_km_kh_doanh_nghi__p_h1.jpg" alt="Ưu Đãi Dành Cho Khách Hàng Doanh Nghiệp" width={1} height={1} className="lazy loaded" src="https://hoanghapccdn.com/media/news/1189_km_kh_doanh_nghi__p_h1.jpg" data-was-processed="true" />
                    <span className="art-cat">Tin Khuyến Mãi</span>
                  </a>
                  <div className="art-text">
                    <p className="art-time">
                      <span>by <b>Mai Văn Học</b></span> | 
                      <time>21-06-2023, 1:53 pm</time>
                    </p>
                    <a href="/uu-dai-danh-cho-khach-hang-doanh-nghiep" className="art-title"><h3 className="inherit">Ưu Đãi Dành Cho Khách Hàng Doanh Nghiệp</h3></a>
                    <div className="art-hover">
                      <div className="art-summary">Hoàng Hà PC triển khai chương trình khuyến mại đặc biệt, với nhiều quà tặng giá trị dành cho Quý Khách hàng Doanh nghiệp khi xây dựng hệ thống máy tính cho văn phòng tại Hoàng Hà PC trong năm 2023.</div>
                      <a href="/uu-dai-danh-cho-khach-hang-doanh-nghiep" className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                <div className="art-item">
                  <a href="/mua-cpu-amd-tang-code-game-star-wars-jedi-survivor" className="art-img">
                    <img data-src="https://hoanghapccdn.com/media/news/1188_km_amd_tang_code_game_starwar.jpg" alt="Mua CPU AMD - Tặng code game STAR WARS Jedi: Survivor" width={1} height={1} className="lazy loaded" src="https://hoanghapccdn.com/media/news/1188_km_amd_tang_code_game_starwar.jpg" data-was-processed="true" />
                    <span className="art-cat">Tin Khuyến Mãi</span>
                  </a>
                  <div className="art-text">
                    <p className="art-time">
                      <span>by <b>Mai Văn Học</b></span> | 
                      <time>21-06-2023, 1:58 pm</time>
                    </p>
                    <a href="/mua-cpu-amd-tang-code-game-star-wars-jedi-survivor" className="art-title"><h3 className="inherit">Mua CPU AMD - Tặng code game STAR WARS Jedi: Survivor</h3></a>
                    <div className="art-hover">
                      <div className="art-summary">Sở hữu con chíp mạnh mẽ thế hệ mới của AMD tại Hoàng Hà PC và nhận ngay code game STAR WARS Jedi: Survivor™ cực hot hiện nay.</div>
                      <a href="/mua-cpu-amd-tang-code-game-star-wars-jedi-survivor" className="art-btn">Đọc chi tiết <i className="fas fa-arrow-right" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Layout>
    
  )
}
