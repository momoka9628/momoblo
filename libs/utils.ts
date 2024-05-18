import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
type dateType = {
  publishedAt: string
}
export type dateCount = {
  publishedAt: string,
  count: number,
}
export const formatDate = (date: string) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  // return format(jstDate, 'd MMMM, yyyy');
  return format(jstDate, 'yyyy/MM/dd');
};
// utc->yyyy/mm
export const formatToMonth = (date: string) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  // return format(jstDate, 'd MMMM, yyyy');
  return format(jstDate, 'yyyy/MM');
};

// 集計
export const groupByMonth = (dates: dateType[]) => {
  //https://qiita.com/zaburo/items/fc8f74d144d73b7d70b6
  const dateCountList: dateCount[] =
    dates.reduce((result: dateCount[], current: dateType): dateCount[] => {
      current.publishedAt = formatToMonth(current.publishedAt)
      const dupulicateDate = result.find(date => date.publishedAt === current.publishedAt)
      if (dupulicateDate) {
        dupulicateDate.count++
      } else {
        result.push({
          publishedAt: current.publishedAt,
          count: 1
        })
      }
      return result
    }, [])
  return dateCountList
}

// 月開始終了返却
export const monthStartEnd = (month: string) => {
  const start = new Date(Number(month.substring(0, 4)), Number(month.substring(4, 6)) - 1, 1)
  const end = new Date(Number(month.substring(0, 4)), Number(month.substring(4, 6)), 0)
}

export const formatRichText = (richText: string) => {
  const $ = cheerio.load(richText);
  const highlight = (text: string, lang?: string) => {
    if (!lang) return hljs.highlightAuto(text);
    try {
      return hljs.highlight(text, { language: lang?.replace(/^language-/, '') || '' });
    } catch (e) {
      return hljs.highlightAuto(text);
    }
  };
  $('pre code').each((_, elm) => {
    const lang = $(elm).attr('class');
    const res = highlight($(elm).text(), lang);
    $(elm).html(res.value);
  });
  return $.html();
};
