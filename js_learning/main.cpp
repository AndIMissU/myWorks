#include <iostream> 
#include<string.h>
using namespace std;
int map[10][10];         // 整个数组
int col[10][10];        // 列
int row[10][10];        // 行 
int smallmap[10][10];   // 小方格 

//用深度优先搜索的方法   
int dfs(int x, int y)
{
    //如果 x和y 超出了9 就结束 
    if(x>9||y>9)
    {
        return 1;
    }
    //下一步搜索坐标
    int nexty = y+1;
    int nextx = x;
    
    // 最后一步特殊处理 
    if(y+1==10)
    {
        nexty = 1;
        nextx = x+1;
    }
    
    //根据此坐标的map值来确定是否略过。因为本来就有的值是不需要填的。
    if(map[x][y]==0)
    {
        //需要填值，就遍历剪枝
        int k;
        for(int i = 1; i < 10; i++)
        {
            // 选择填写第几个方格的map
            k = ((x-1)/3)*3 + (y-1)/3+1;
            // 如果 都不为0的话就 先初始化  将i赋值给 map的xy  并将 列和行的都初始化 为0 再如果还可以继续将深度优先搜索下去 ，就继续搜索
            //   如果不的话  就将这个点设为已访问 小map也设为已访问
            if(col[y][i]&&row[x][i]&&smallmap[k][i])
            {
            	
                map[x][y]=i;
                col[y][i]=0;
                row[x][i]=0;
                // 小map
                smallmap[k][i]=0;

                if(dfs(nextx,nexty))
                    return 1;
                // 小map
                map[x][y]=0;
                col[y][i]=1;
                row[x][i]=1;
                smallmap[k][i]=1;
                
            }
        }
    } else {
    	// 不能搜索下去就 结束   可以的话 就继续
    	if (dfs(nextx,nexty))
        	return 1;
    	}
    return 0;
}
int main()
{
   // 几个数据数据
   int t;
   cin >>t;
   while(t-->0)
   {
       char a;
       // 初始化
       memset(col,1,sizeof(col));
       memset(row,1,sizeof(row));
       memset(smallmap,1,sizeof(smallmap));
       char MAP[10][10];
       //  输入原始的map  meset是一种清空数组的方法
       for(int i = 1; i<10; i++)
       {
           for(int j = 1; j < 10; j++)
           {
               cin>>a;
               int b = a-'0';
               map[i][j]=b;
               row[i][b] = 0;
               col[j][b] = 0;

               int k = ((i-1)/3)*3+(j-1)/3+1;
               smallmap[k][b] = 0;
           }
       }
      //  开始深度搜索
       dfs(1,1);
       cout<<endl;
       //  输出结果
       for(int i = 1; i < 10; i++)
       {
           for(int j =1; j < 10; j++)
           {
              cout<<map[i][j];
           }
           cout<<endl;
       }
       cout<<endl;
   }
}