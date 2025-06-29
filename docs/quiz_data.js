const QUIZ_DATA = {
  "AWS Certified Solutions Architect – Associate – SAA-C03": {
    "course_detail": {
      "title": "AWS Certified Solutions Architect – Associate – SAA-C03",
      "question_number": 5
    },
    "questions": [
      {
        "id": 1,
        "title": "RDS マルチ-AZ のフェイルオーバー",
        "text": "単一リージョン内で高可用性を確保するために Amazon RDS で推奨される構成は？",
        "choices": [
          "マルチ-AZ 配置",
          "リードレプリカのみ",
          "単一 AZ ＋ 定期スナップショット",
          "クロスリージョンリードレプリカ"
        ],
        "answer": "マルチ-AZ 配置",
        "explanation": "マルチ-AZ はスタンバイ DB へ自動フェイルオーバーを提供し、ダウンタイムを最小化できます。"
      },
      {
        "id": 2,
        "title": "Route 53 レイテンシルーティング",
        "text": "世界各地のユーザーに最も低遅延のエンドポイントを返す Route 53 のポリシーは？",
        "choices": [
          "レイテンシーベースルーティング",
          "加重ルーティング",
          "フェイルオーバールーティング",
          "位置情報ルーティング"
        ],
        "answer": "レイテンシーベースルーティング",
        "explanation": "DNS クエリ元の位置と各リージョンの計測レイテンシを比較し、最小レイテンシのレコードを返します。"
      },
      {
        "id": 3,
        "title": "Auto Scaling のターゲット追跡",
        "text": "平均 CPU 使用率 60 % を維持したい場合に最もシンプルなスケーリングポリシーは？",
        "choices": [
          "ターゲット追跡スケーリング",
          "ステップスケーリング",
          "スケジュールスケーリング",
          "手動スケーリング"
        ],
        "answer": "ターゲット追跡スケーリング",
        "explanation": "ターゲット追跡は指定メトリクスを継続的に追跡し、自動でスケールイン・アウトします。"
      },
      {
        "id": 4,
        "title": "S3 へのプライベートアクセス",
        "text": "VPC から S3 へインターネットゲートウェイを経由せず、追加料金なしでアクセスできる仕組みは？",
        "choices": [
          "ゲートウェイエンドポイント",
          "インターフェイスエンドポイント",
          "NAT Gateway",
          "Direct Connect"
        ],
        "answer": "ゲートウェイエンドポイント",
        "explanation": "S3/DynamoDB 用のゲートウェイエンドポイントは通信料無料で VPC 内からプライベート経路を提供します。"
      },
      {
        "id": 5,
        "title": "CloudFront から S3 を保護",
        "text": "CloudFront 経由のみで S3 バケットにアクセスさせ、KMS 暗号化もサポートする最新推奨機能は？",
        "choices": [
          "Origin Access Control (OAC)",
          "Origin Access Identity (OAI)",
          "サイニング URL",
          "CORS ポリシー"
        ],
        "answer": "Origin Access Control (OAC)",
        "explanation": "OAC は全リージョンと SSE-KMS をサポートし、OAI の後継として推奨されています。"
      },
      {
        "id": 6,
        "title": "DynamoDB グローバルテーブル",
        "text": "多リージョンで読み書きでき、高可用性を確保する DynamoDB の機能は？",
        "choices": [
          "グローバルテーブル",
          "オンデマンドバックアップ",
          "DynamoDB ストリーム",
          "パーティションキーの分散"
        ],
        "answer": "グローバルテーブル",
        "explanation": "グローバルテーブルはマルチリージョン・マルチアクティブで自動レプリケーションを提供します。"
      },
      {
        "id": 7,
        "title": "Aurora Global Database DR",
        "text": "Aurora Global Database でプライマリリージョン障害時に推奨されるフェイルオーバー方法は？",
        "choices": [
          "マネージドフェイルオーバー",
          "手動レプリカプロモーション",
          "論理レプリケーションスロット",
          "物理スナップショットコピー"
        ],
        "answer": "マネージドフェイルオーバー",
        "explanation": "Managed failover は RPO 数秒でセカンダリを昇格し、復旧後は自動で元構成に戻します。"
      },
      {
        "id": 8,
        "title": "VPC トランジティブルーティング",
        "text": "複数 VPC をハブ＆スポーク接続し、トランジティブルーティングを実現する推奨サービスは？",
        "choices": [
          "AWS Transit Gateway",
          "VPC ピアリング",
          "VPN CloudHub",
          "PrivateLink"
        ],
        "answer": "AWS Transit Gateway",
        "explanation": "Transit Gateway はクラウドルーターとして機能し、ピアリングのような 1:1 接続やトランジティブ制限を回避します。"
      },
      {
        "id": 9,
        "title": "S3 マルチパートアップロードの利点",
        "text": "マルチパートアップロードで**得られない**主な利点はどれですか？",
        "choices": [
          "大容量ファイルのスループット向上",
          "ネットワーク障害時のリカバリ容易化",
          "ストレージコストの即時割引",
          "アップロードの一時停止と再開"
        ],
        "answer": "ストレージコストの即時割引",
        "explanation": "マルチパートは性能と耐障害性を改善しますが、単独でコストを割引する機能ではありません。"
      },
      {
        "id": 10,
        "title": "マルチパート推奨サイズ",
        "text": "AWS 公式が「約 **○○ MB** 以上のオブジェクトならマルチパートを検討」と推奨する閾値は？",
        "choices": [
          "100 MB",
          "16 MB",
          "1 GB",
          "5 TB"
        ],
        "answer": "100 MB",
        "explanation": "100 MB を超えるとマルチパートで並列アップロードの利点が顕著になります。"
      },
      {
        "id": 11,
        "title": "S3 パフォーマンス最適化",
        "text": "同一バケットで書き込みパフォーマンスを水平拡張する最も簡単な方法は？",
        "choices": [
          "複数プレフィックスに並列書き込み",
          "1 つの巨大プレフィックスを使用",
          "ライフサイクルで小分け",
          "バケットをリージョン間で分割"
        ],
        "answer": "複数プレフィックスに並列書き込み",
        "explanation": "プレフィックスごとにスケールするため、10 プレフィックスなら書き込み性能も 10 倍近く伸びます。"
      },
      {
        "id": 12,
        "title": "RDS スタンバイの読み取り",
        "text": "RDS マルチ-AZ 配置のスタンバイインスタンスが通常提供**しない**ものは？",
        "choices": [
          "自動フェイルオーバー先",
          "読み取りトラフィック処理",
          "同期レプリケーション",
          "障害発生時の復旧"
        ],
        "answer": "読み取りトラフィック処理",
        "explanation": "スタンバイはフェイルオーバー専用で読み取りを受け付けません。"
      },
      {
        "id": 13,
        "title": "VPC ピアリングの制限",
        "text": "VPC ピアリングがサポート**しない**のは？",
        "choices": [
          "トランジティブルーティング",
          "同一リージョン接続",
          "ルートテーブルの CIDR 追加",
          "セキュリティグループ参照"
        ],
        "answer": "トランジティブルーティング",
        "explanation": "ピアリングは 1:1 接続で第三の VPC を経由した通信はできません。"
      },
      {
        "id": 14,
        "title": "Auto Scaling で可用性優先",
        "text": "ターゲット追跡ポリシーがスケールインを緩やかに行う設計目的は？",
        "choices": [
          "可用性維持を優先するため",
          "コスト最小化を優先するため",
          "起動テンプレート更新を避けるため",
          "メトリクス取得コストを下げるため"
        ],
        "answer": "可用性維持を優先するため",
        "explanation": "トラフィック減少時も急激に縮退せず、サービス継続性を保ちます。"
      },
      {
        "id": 15,
        "title": "S3 マルチパート最小パートサイズ",
        "text": "S3 マルチパートアップロードの各パートは最小 **5 MB** である。これはどのドキュメントで確認できますか？",
        "choices": [
          "マルチパートアップロード API リファレンス",
          "EC2 ユーザーガイド",
          "VPC プライベートリンク概要",
          "Route 53 ドメインレジストラ"
        ],
        "answer": "マルチパートアップロード API リファレンス",
        "explanation": "API ドキュメントに 5 MB ～ 5 GB (最終パート例外) と明示されています。"
      },
      {
        "id": 16,
        "title": "Transit Gateway のメリット",
        "text": "メッシュ型ピアリングを避け、接続数の管理を簡素化できる TGW の構成は？",
        "choices": [
          "ハブ＆スポーク",
          "フルメッシュ",
          "デイジーチェーン",
          "リング"
        ],
        "answer": "ハブ＆スポーク",
        "explanation": "各 VPC がハブ TGW に 1 回アタッチするだけで済み、スケーラビリティと管理性が向上します。"
      },
      {
        "id": 17,
        "title": "CloudFront OAC と SSE-KMS",
        "text": "OAC が OAI と比較して提供する追加機能は？",
        "choices": [
          "SSE-KMS 暗号化オブジェクトのサポート",
          "レイテンシーベースルーティング",
          "IAM ポリシーサイズの削減",
          "CloudFront Functions 自動生成"
        ],
        "answer": "SSE-KMS 暗号化オブジェクトのサポート",
        "explanation": "OAC は KMS で暗号化されたオブジェクトにも署名リクエストが可能です。"
      },
      {
        "id": 18,
        "title": "DynamoDB グローバルテーブルの整合性",
        "text": "グローバルテーブルでは各リージョンが読み書きできるが、アプリ開発者が留意すべき整合性モデルは？",
        "choices": [
          "最終的整合性",
          "強力な整合性",
          "ローカルトランザクション整合性",
          "同期 CP 整合性"
        ],
        "answer": "最終的整合性",
        "explanation": "書き込みが伝播するまで整合が取れないため、コンフリクト解決ロジックが必要です。"
      },
      {
        "id": 19,
        "title": "S3 マルチパートアップロードの最大オブジェクトサイズ",
        "text": "マルチパートアップロードでサポートされる単一オブジェクトの最大サイズは？",
        "choices": [
          "5 TB",
          "1 TB",
          "100 GB",
          "15 TB"
        ],
        "answer": "5 TB",
        "explanation": "マルチパートは 5 MB～5 TB のオブジェクトに対応します。"
      },
      {
        "id": 20,
        "title": "TGW ピアリング",
        "text": "別リージョンの Transit Gateway 間を接続しトラフィックをルーティングする機能は？",
        "choices": [
          "TGW ピアリングアタッチメント",
          "VPC ピアリング",
          "Direct Connect Gateway",
          "NAT ピアリング"
        ],
        "answer": "TGW ピアリングアタッチメント",
        "explanation": "ピアリングアタッチメントにより intra-Region / inter-Region で TGW 同士を接続できます。"
      }
    ]
  },
  "AWS Certified Data Engineer – Associate – DEA-C01": {
    "course_detail": {
      "title": "AWS Certified Data Engineer – Associate – DEA-C01",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "Lake Formation の 2 段階認可",
        "text": "Lake Formation でデータにアクセスする際、**必ず**通過しなければならない権限制御の組み合わせは？",
        "choices": [
          "IAM 権限 **と** Lake Formation 権限の両方",
          "IAM 権限のみ",
          "Lake Formation 権限のみ",
          "S3 バケットポリシーのみ"
        ],
        "answer": "IAM 権限 **と** Lake Formation 権限の両方",
        "explanation": "リクエストは IAM と Lake Formation の二重チェックを通過する必要があります。"
      },
      {
        "id": 2,
        "title": "Lake Formation 権限カテゴリ",
        "text": "Lake Formation 権限モデルで「メタデータアクセス権限」が付与対象とするリソースは？",
        "choices": [
          "AWS Glue Data Catalog のデータベースとテーブル",
          "S3 オブジェクトの暗号化キー",
          "IAM ロール",
          "EC2 インスタンス"
        ],
        "answer": "AWS Glue Data Catalog のデータベースとテーブル",
        "explanation": "メタデータアクセス権限は Data Catalog 内の DB・テーブルの作成や SELECT 等を制御します。"
      },
      {
        "id": 3,
        "title": "LF-Tags の用途",
        "text": "複数テーブルにまたがる動的なアクセス制御を簡素化する Lake Formation 機能は？",
        "choices": [
          "LF-Tags によるタグベースアクセス制御",
          "S3 ライフサイクルルール",
          "IAM Permission Boundaries",
          "GuardDuty Findings"
        ],
        "answer": "LF-Tags によるタグベースアクセス制御",
        "explanation": "LF-Tags を利用するとタグを付与したリソース集合に一括で権限を与えられます。"
      },
      {
        "id": 4,
        "title": "Glue Job Bookmark の目的",
        "text": "Glue ジョブで「Job Bookmark」を有効化すると得られる主な効果は？",
        "choices": [
          "既に処理済みデータの再処理を防止できる",
          "Spark ワーカー数が自動で増える",
          "データカタログが自動作成される",
          "IAM ロールが不要になる"
        ],
        "answer": "既に処理済みデータの再処理を防止できる",
        "explanation": "Job Bookmark は前回の実行状態を保持し、差分のみを処理します。"
      },
      {
        "id": 5,
        "title": "Glue Job Bookmark の構成要素",
        "text": "Job Bookmark が保持する情報に**含まれない**のは？",
        "choices": [
          "ソース読み取り位置",
          "変換ステップの状態",
          "ターゲットへの書き込みコミット位置",
          "CloudTrail Trail 名称"
        ],
        "answer": "CloudTrail Trail 名称",
        "explanation": "Bookmark はソース・変換・ターゲットのステートを保持しますが Trail 名は保持しません。"
      },
      {
        "id": 6,
        "title": "Glue Blueprints & Workflows",
        "text": "データベーススナップショット取り込みなど複数ジョブをまとめて自動生成する Glue 機能は？",
        "choices": [
          "Glue Blueprint から生成される Workflow",
          "Dev Endpoint",
          "Trigger だけの連鎖",
          "DataBrew レシピ"
        ],
        "answer": "Glue Blueprint から生成される Workflow",
        "explanation": "Blueprint はパラメータを指定して Crawler・Job・Trigger を含む Workflow を一括生成します。"
      },
      {
        "id": 7,
        "title": "Athena Partition Projection",
        "text": "Partition Projection を有効にすると得られる主な利点は？",
        "choices": [
          "パーティションメタデータ API 呼び出しを省略しクエリ計画を高速化",
          "テーブルサイズが自動で縮小",
          "クエリ結果を自動キャッシュ",
          "Glue Crawler が必須になる"
        ],
        "answer": "パーティションメタデータ API 呼び出しを省略しクエリ計画を高速化",
        "explanation": "Projection はカタログ参照をスキップし、数千パーティションでも高速・低コストです。"
      },
      {
        "id": 8,
        "title": "Partition Projection が不要にする運用",
        "text": "Projection を使うことで**不要**になることは？",
        "choices": [
          "新規パーティションを Glue Crawler で追加登録",
          "Parquet 変換",
          "S3 バケット暗号化",
          "IAM ロール作成"
        ],
        "answer": "新規パーティションを Glue Crawler で追加登録",
        "explanation": "Projection は S3 パスパターンから動的にパーティションを推測するため、カタログ更新が不要です。"
      },
      {
        "id": 9,
        "title": "Redshift Concurrency Scaling",
        "text": "同時実行クエリが急増した際、**自動でクラスター容量を追加**して性能を保つ機能は？",
        "choices": [
          "Concurrency Scaling",
          "Enhanced VPC Routing",
          "AQUA",
          "Spectrum"
        ],
        "answer": "Concurrency Scaling",
        "explanation": "Concurrency Scaling は数千ユーザーを高速クエリで処理できるよう一時クラスターを自動付与します。"
      },
      {
        "id": 10,
        "title": "Redshift RA3 の特徴",
        "text": "RA3 ノードが従来ノードと比較して提供する最大のアーキテクチャ的利点は？",
        "choices": [
          "コンピュートとストレージを独立してスケールできる",
          "SSD のみ使用",
          "マスター/スレーブ構成",
          "JDBC 接続不要"
        ],
        "answer": "コンピュートとストレージを独立してスケールできる",
        "explanation": "RA3 は Managed Storage を用い、計算リソースと分離課金されます。"
      },
      {
        "id": 11,
        "title": "Redshift Spectrum の用途",
        "text": "Redshift Spectrum を利用すると実現できることは？",
        "choices": [
          "S3 上のデータを Redshift へロードせず直接クエリ",
          "Redshift クラスターを停止",
          "DynamoDB への外部テーブル作成",
          "EMR クラスター自動生成"
        ],
        "answer": "S3 上のデータを Redshift へロードせず直接クエリ",
        "explanation": "Spectrum は外部テーブルを作成し、エクサバイト級 S3 データをインプレース分析します。"
      },
      {
        "id": 12,
        "title": "Redshift Serverless スケーリング",
        "text": "Redshift Serverless がワークロードに応じて自動調整する主なリソースは？",
        "choices": [
          "RPU (Redshift Processing Units)",
          "IAM ポリシー",
          "KMS キー",
          "VPC エンドポイント数"
        ],
        "answer": "RPU (Redshift Processing Units)",
        "explanation": "Serverless は AI で RPU を自動スケールし、価格とパフォーマンスをスライダーで調整できます。"
      },
      {
        "id": 13,
        "title": "Kinesis Data Firehose 変換",
        "text": "Firehose でデータ変換を有効にすると、ストリームはどのサービスを呼び出しますか？",
        "choices": [
          "AWS Lambda",
          "Amazon EMR",
          "Redshift Spectrum",
          "MSK Connect"
        ],
        "answer": "AWS Lambda",
        "explanation": "Firehose は受信バッチを Lambda 関数に渡し、戻り値を宛先へ配送します。"
      },
      {
        "id": 14,
        "title": "MSK Serverless の課金モデル",
        "text": "Amazon MSK Serverless でユーザーが支払う主な課金単位は？",
        "choices": [
          "送信・保管データ量に基づく従量課金",
          "プロビジョニングしたブローカー数",
          "EC2 インスタンス時間",
          "VPC エンドポイント数"
        ],
        "answer": "送信・保管データ量に基づく従量課金",
        "explanation": "MSK Serverless はブローカー容量を自動スケールし、ストリームされたバイト数などで課金されます。"
      },
      {
        "id": 15,
        "title": "Lake Formation Workflow の実行単位",
        "text": "Workflow 全体の実行結果を 1 つのエンティティとして追跡できる理由は？",
        "choices": [
          "Workflow が各ジョブ・クローラーをまとめた単一単位として管理されるから",
          "各 Glue Job に個別 IAM ロールがあるから",
          "CloudWatch Dashboard が自動生成されるから",
          "S3 イベント通知でジョブ完了を検知するから"
        ],
        "answer": "Workflow が各ジョブ・クローラーをまとめた単一単位として管理されるから",
        "explanation": "Lake Formation は Blueprint 生成の Workflow を 1 つのジョブセットとしてスケジューリング・監視します。"
      },
      {
        "id": 16,
        "title": "Athena Projection の注意点",
        "text": "Partition Projection テーブルで「スパーステーブル」の場合に発生しうる問題は？",
        "choices": [
          "存在しないパーティションまで S3 をスキャンしクエリが遅くなる",
          "Glue Data Catalog がロックされる",
          "Parquet 変換が強制される",
          "クエリは失敗し実行できない"
        ],
        "answer": "存在しないパーティションまで S3 をスキャンしクエリが遅くなる",
        "explanation": "スパーステーブルでは Projection が想定するすべてのパスを確認するため無駄なリストが発生します。"
      },
      {
        "id": 17,
        "title": "Redshift Concurrency Scaling の課金",
        "text": "Concurrency Scaling 使用量の無料クレジットはどのように計算されますか？",
        "choices": [
          "メインクラスターの使用時間に比例",
          "常に 1 時間/日",
          "常に無料",
          "クエリ件数に比例"
        ],
        "answer": "メインクラスターの使用時間に比例",
        "explanation": "各 RA3/DC2 使用時間に対し一定比率の Concurrency Scaling クレジットが付与されます。"
      },
      {
        "id": 18,
        "title": "RA3 Managed Storage のデータ配置",
        "text": "未使用ブロックが自動で S3 ベースのストレージにオフロードされる動作はどの機能によるものですか？",
        "choices": [
          "Managed Storage",
          "Spectrum",
          "Snapshot Copy",
          "WLM"
        ],
        "answer": "Managed Storage",
        "explanation": "RA3 はディスクキャッシュ＋S3 ストレージを自動階層化し、コストを最適化します。"
      },
      {
        "id": 19,
        "title": "Firehose 変換の失敗ハンドリング",
        "text": "Lambda 変換が失敗したレコードをエラーデータ配信先へルーティングする機能は？",
        "choices": [
          "ProcessingConfiguration の RetryOptions + BackupMode",
          "Kinesis Client Library",
          "CloudWatch Logs Subscription",
          "EMRFS Consistency View"
        ],
        "answer": "ProcessingConfiguration の RetryOptions + BackupMode",
        "explanation": "最大 3 回再試行後、失敗レコードを S3 などのバックアップ先へ送れます。"
      },
      {
        "id": 20,
        "title": "MSK Serverless のスループット制限",
        "text": "MSK Serverless で現在公開されている**1 ストリームあたりの最大スループット**は？",
        "choices": [
          "200 MiB/s",
          "1,000 MiB/s",
          "50 MiB/s",
          "無制限"
        ],
        "answer": "200 MiB/s",
        "explanation": "MSK Serverless は各ストリーム最大 200 MiB/s・50,000 パーティションをサポートします (2025 年 6 月時点)。"
      }
    ]
  },
  "AWS Certified Machine Learning – Specialty – MLS-C01": {
    "course_detail": {
      "title": "AWS Certified Machine Learning – Specialty – MLS-C01",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "SageMaker Processing のユースケース",
        "text": "SageMaker Processing ジョブが最も適しているタスクはどれですか？",
        "choices": [
          "前処理・後処理やバッチ推論をコンテナ化して実行する",
          "トレーニングジョブのハイパーパラメータ最適化",
          "推論エンドポイントのオートスケーリング",
          "モデルの A/B テスト"
        ],
        "answer": "前処理・後処理やバッチ推論をコンテナ化して実行する",
        "explanation": "Processing ジョブはワークロードを Docker コンテナで実行し、データ準備やバリデーション、バッチ推論に最適です。"
      },
      {
        "id": 2,
        "title": "Data Wrangler のジョブ変換",
        "text": "Data Wrangler フローを本番パイプラインに組み込むベストプラクティスは？",
        "choices": [
          "`export_job_definition` で Processing ジョブとしてスケジュールする",
          "Jupyter ノートブックに貼り付けて手動実行する",
          "Glue Job に直接貼り付ける",
          "CloudFormation テンプレートに埋め込む"
        ],
        "answer": "`export_job_definition` で Processing ジョブとしてスケジュールする",
        "explanation": "フローを Processing Job Definition としてエクスポートすれば、Pipelines やイベントスケジュールに組み込めます。"
      },
      {
        "id": 3,
        "title": "Ground Truth アクティブラーニング",
        "text": "Auto-labeling が真価を発揮するのはどの状況ですか？",
        "choices": [
          "ラベル作成コストを下げつつ精度を維持したい画像分類",
          "ラベル済みデータが十分にあるテキスト分類",
          "モデルデプロイのみ行いたい場合",
          "Web アプリの UI テスト"
        ],
        "answer": "ラベル作成コストを下げつつ精度を維持したい画像分類",
        "explanation": "Ground Truth はアクティブラーニングで難易度の低いサンプルを自動ラベル付けし、コストを 70 % 以上削減可能です。"
      },
      {
        "id": 4,
        "title": "Clarify SHAP 値",
        "text": "SHAP 値が提供する主な洞察は？",
        "choices": [
          "個々の予測に対する特徴量寄与度",
          "データセットの行数",
          "GPU メモリ使用量",
          "推論レイテンシ"
        ],
        "answer": "個々の予測に対する特徴量寄与度",
        "explanation": "Clarify は SHAP を用い、各特徴が予測にどれだけ正・負に貢献したかを示します。"
      },
      {
        "id": 5,
        "title": "Model Registry のバージョン管理",
        "text": "SageMaker Model Registry でモデルをプロダクションへ昇格する操作は？",
        "choices": [
          "ModelPackage のステージを `Approved` に変更",
          "モデルを直接 S3 にアップロード",
          "ECR タグを書き換える",
          "CloudWatch アラームを無効化"
        ],
        "answer": "ModelPackage のステージを `Approved` に変更",
        "explanation": "Registry では `Pending → Approved` の昇格で CI/CD がトリガーされるのが一般的パターンです."
      },
      {
        "id": 6,
        "title": "SageMaker Feature Store 同期動作",
        "text": "オンラインストアに書き込んだデータはどうなる？",
        "choices": [
          "自動的にオフラインストアへも非同期複製される",
          "同期されず別途パイプラインが必要",
          "Glacier にアーカイブされる",
          "削除される"
        ],
        "answer": "自動的にオフラインストアへも非同期複製される",
        "explanation": "オンライン／オフライン併用時はバックグラウンドで整合性を維持します。"
      },
      {
        "id": 7,
        "title": "Pipelines 失敗時の再実行",
        "text": "途中失敗した Pipeline をコスト効率よくやり直す推奨方法は？",
        "choices": [
          "キャッシュメカニズムを有効にし、成功済みステップをスキップ",
          "すべてのステップを強制再実行",
          "`stop_pipeline` で削除して最初から作り直す",
          "CloudFormation でスタックを削除"
        ],
        "answer": "キャッシュメカニズムを有効にし、成功済みステップをスキップ",
        "explanation": "ステップキャッシュにより成功済みコンテナ出力を再利用し、不要な再計算を防ぎます。"
      },
      {
        "id": 8,
        "title": "Managed Spot Training のチェックポイント",
        "text": "Spot 中断で途中学習を再開するために推奨されるパターンは？",
        "choices": [
          "CheckpointConfig で S3 パスを指定",
          "EBS ジャーナリングを無効化",
          "Local Mode を使用",
          "Pipe モードをオフにする"
        ],
        "answer": "CheckpointConfig で S3 パスを指定",
        "explanation": "中断時に自動で S3 へスナップショットが保存され、再開時に読み込まれます。"
      },
      {
        "id": 9,
        "title": "Hyperparameter Tuning Early Stopping",
        "text": "HPO で `EarlyStoppingType=Auto` を設定するとどうなりますか？",
        "choices": [
          "成績の悪いトライアルが自動終了しコストが削減される",
          "全トライアルが必ず最後まで走る",
          "HPO ジョブが失敗する",
          "Spot インスタンスしか使用できない"
        ],
        "answer": "成績の悪いトライアルが自動終了しコストが削減される",
        "explanation": "Auto では一定エポック時点のメトリクスで将来パフォーマンスを推定し、望み薄なジョブを停止します。"
      },
      {
        "id": 10,
        "title": "Batch Transform の利点",
        "text": "サーバーレスエンドポイントではなく Batch Transform が適するケースは？",
        "choices": [
          "数百万レコードの非リアルタイム推論",
          "低レイテンシ (<50 ms) 要件",
          "ステートフル推論",
          "エッジデバイス推論"
        ],
        "answer": "数百万レコードの非リアルタイム推論",
        "explanation": "Batch Transform はスループット最優先でオンデマンドクラスターを起動し、大規模バッチを高速処理します."
      },
      {
        "id": 11,
        "title": "Multi-Model Endpoint のロード挙動",
        "text": "初回リクエスト時のモデルロードによって発生するのは？",
        "choices": [
          "コールドスタート遅延",
          "推論失敗",
          "メモリ解放",
          "GPU 割り当て解除"
        ],
        "answer": "コールドスタート遅延",
        "explanation": "MME は S3 からモデルをロードするので最初の呼び出し時に追加レイテンシが発生します。"
      },
      {
        "id": 12,
        "title": "Neo コンパイルオブジェクト",
        "text": "Neo コンパイラに渡す必要がある入力は？",
        "choices": [
          "Trained model artifacts (e.g., .tar.gz) とターゲットハードウェア",
          "未学習データセット",
          "Feature Store",
          "Glue Crawler"
        ],
        "answer": "Trained model artifacts (e.g., .tar.gz) とターゲットハードウェア",
        "explanation": "コンパイルはモデルとデバイスプロファイルに基づき命令を最適化します。"
      },
      {
        "id": 13,
        "title": "Clarify データセット統計",
        "text": "Pre-training バイアス分析で生成される `analysis.json` に含まれない情報は？",
        "choices": [
          "予測確率",
          "カテゴリ別カウント",
          "欠損値割合",
          "バイアス指標"
        ],
        "answer": "予測確率",
        "explanation": "学習前なので予測は存在しません。"
      },
      {
        "id": 14,
        "title": "Debugger Rule の `VanishingGradient`",
        "text": "`VanishingGradient` ルールが `IssuesFound` を返した場合の推奨対処は？",
        "choices": [
          "学習率を上げるか活性化関数を変更する",
          "すぐに推論エンドポイントをデプロイする",
          "出力層を削除する",
          "SHAP 解析を行う"
        ],
        "answer": "学習率を上げるか活性化関数を変更する",
        "explanation": "勾配消失が発生しており、ハイパーパラメータやネットワーク構造を見直す必要があります。"
      },
      {
        "id": 15,
        "title": "Serverless Inference 最大メモリ",
        "text": "現時点で Serverless Inference がサポートする最大メモリサイズは？",
        "choices": [
          "6144 MB",
          "4096 MB",
          "10240 MB",
          "128 MB"
        ],
        "answer": "6144 MB",
        "explanation": "128–6144 MB の範囲を 1 MB 刻みで指定できます（2025-06 時点）。"
      },
      {
        "id": 16,
        "title": "SageMaker Experiments",
        "text": "Experiments が主に提供する機能は？",
        "choices": [
          "実験のパラメータ・メトリクス・成果物の系統管理",
          "GPU 使用率の強制",
          "Endpoint 自動スケール",
          "IAM ロール自動発行"
        ],
        "answer": "実験のパラメータ・メトリクス・成果物の系統管理",
        "explanation": "Trial, TrialComponent を使い ML 実験を体系的に追跡できます。"
      },
      {
        "id": 17,
        "title": "Clarify バイアス指標",
        "text": "Demographic Parity はどのようなバイアス指標ですか？",
        "choices": [
          "予測陽性率がグループ間で等しいか",
          "真陽性率の差",
          "偽陽性率の差",
          "説明変数の分散"
        ],
        "answer": "予測陽性率がグループ間で等しいか",
        "explanation": "Demographic Parity (Statistical Parity) は保護属性ごとの予測陽性率を比較します。"
      },
      {
        "id": 18,
        "title": "Shadow Deployment メトリクス",
        "text": "Shadow テスト中に新旧モデルを比較するために CloudWatch カスタムメトリクスで **最も** 追跡すべきものは？",
        "choices": [
          {
            "推論レイテンシと業務 KPI (例": "CVR)"
          },
          "ECR プル数",
          "VPC フローログ",
          "Lambda エラー数"
        ],
        "answer": "推論レイテンシと業務 KPI (例： CVR)",
        "explanation": "レイテンシ悪化や性能指標低下がないかを確認することで安全に昇格可否を判断できます."
      },
      {
        "id": 19,
        "title": "JumpStart 基盤モデル",
        "text": "JumpStart で基盤モデルをカスタムデータで微調整 (Fine-tune) する際の制約は？",
        "choices": [
          "モデルごとに指定フォーマットのデータセットを S3 に用意する必要がある",
          "追加ライセンス料金が必須",
          "GPU インスタンスでは実行不可",
          "オンプレからは呼び出せない"
        ],
        "answer": "モデルごとに指定フォーマットのデータセットを S3 に用意する必要がある",
        "explanation": "Fine-tune テンプレートはモデルに応じて JSONL や CSV など決まったフォーマットを要求します."
      },
      {
        "id": 20,
        "title": "SageMaker Canvas のユースケース",
        "text": "Canvas が最も価値を発揮するユーザー層は？",
        "choices": [
          "コーディング不要で ML 予測したいビジネスアナリスト",
          "HPC エンジニア",
          "ネットワーク管理者",
          "ゲーム開発者"
        ],
        "answer": "コーディング不要で ML 予測したいビジネスアナリスト",
        "explanation": "ノーコード UI で AutoML を実行し、SageMaker Studio へハンドオフも可能です。"
      }
    ]
  },
  "AWS Certified SysOps Administrator – Associate – SOA-C02": {
    "course_detail": {
      "title": "AWS Certified SysOps Administrator – Associate – SOA-C02",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "CloudWatch アラーム通知が届かない原因",
        "text": "CloudWatch アラームを SNS トピックへ紐付けたが通知メールが届かない。最も可能性の高い原因は？",
        "choices": [
          "SNS トピックに購読 (Subscription) が存在しない",
          "CloudWatch Agent が未インストール",
          "SNS トピックの名前が長すぎる",
          "IAM ロールに `cloudwatch:PutMetricAlarm` が無い"
        ],
        "answer": "SNS トピックに購読 (Subscription) が存在しない",
        "explanation": "通知はトピックに少なくとも 1 件の有効なサブスクリプションがないと配信されません。"
      },
      {
        "id": 2,
        "title": "Auto Scaling の ELB ヘルスチェック",
        "text": "Auto Scaling グループで ELB ヘルスチェックを有効にすると、インスタンスが Unhealthy と判定される主な情報源は？",
        "choices": [
          "Elastic Load Balancing",
          "CloudTrail",
          "Route 53",
          "Systems Manager Agent"
        ],
        "answer": "Elastic Load Balancing",
        "explanation": "ELB が返すステータスを受け取り、異常と判断されたらインスタンスを置き換えます。"
      },
      {
        "id": 3,
        "title": "S3 Delete Marker の挙動",
        "text": "バージョニング有効バケットで `DeleteObject` を実行するとどうなりますか？",
        "choices": [
          "Delete Marker が作成される",
          "オブジェクトが完全削除される",
          "ライフサイクルが自動停止する",
          "404 エラーが返る"
        ],
        "answer": "Delete Marker が作成される",
        "explanation": "S3 はオブジェクトを残したまま Delete Marker を最新バージョンとして追加します。"
      },
      {
        "id": 4,
        "title": "RDS マルチ-AZ フェイルオーバー",
        "text": "RDS マルチ-AZ 配置で自動フェイルオーバーが発生する代表的な要因は？",
        "choices": [
          "プライマリのネットワーク到達不能",
          "リードレプリカのスロークエリ",
          "CloudWatch アラーム無効化",
          "バックアップウィンドウ外の CPU スパイク"
        ],
        "answer": "プライマリのネットワーク到達不能",
        "explanation": "RDS はネットワーク障害などを検出するとスタンバイへ自動で切替えます。"
      },
      {
        "id": 5,
        "title": "EBS スナップショット削除のコスト",
        "text": "あるスナップショットを削除しても料金が下がらない場合がある理由は？",
        "choices": [
          "後続スナップショットが同じブロックを参照している",
          "削除操作は 24 時間反映遅延がある",
          "未使用でも 90 日は課金される",
          "スナップショットはリージョン課金のみ"
        ],
        "answer": "後続スナップショットが同じブロックを参照している",
        "explanation": "参照されているデータが残るためコストは次のスナップショットに移るだけです。"
      },
      {
        "id": 6,
        "title": "VPC ピアリングの制限",
        "text": "VPC ピアリングがサポート**しない**ものは？",
        "choices": [
          "トランジティブルーティング",
          "同一リージョン接続",
          "CIDR ルート追加",
          "セキュリティグループ参照"
        ],
        "answer": "トランジティブルーティング",
        "explanation": "ピアリングは 1:1 接続であり、経由した第三の VPC へは転送できません。"
      },
      {
        "id": 7,
        "title": "IAM ベストプラクティス",
        "text": "IAM ポリシー設計でまず意識すべき基本原則は？",
        "choices": [
          "最小権限",
          "ワイルドカード許可",
          "同一ロールの共有",
          "パスワードポリシー無効化"
        ],
        "answer": "最小権限",
        "explanation": "余分なアクションやリソースを与えずタスクに必要な権限のみ付与します。"
      },
      {
        "id": 8,
        "title": "CloudTrail ログ完全性検証",
        "text": "CloudTrail ログが改ざんされていないことを確認する公式機能は？",
        "choices": [
          "ログファイル検証",
          "CloudWatch ラムダフィルター",
          "KMS ローテーション",
          "Trusted Advisor"
        ],
        "answer": "ログファイル検証",
        "explanation": "SHA-256 & RSA 署名を使いログの改ざん有無を CLI で検証できます。"
      },
      {
        "id": 9,
        "title": "Session Manager の利点",
        "text": "Session Manager で EC2 に接続する際に**不要**なものは？",
        "choices": [
          "インバウンド SSH ポート開放",
          "IAM 権限",
          "SSM Agent",
          "SSM エンドポイントへのアウトバウンド通信"
        ],
        "answer": "インバウンド SSH ポート開放",
        "explanation": "Session Manager はポート 22 を閉じたまま IAM + SSM Agent 経由で接続できます。"
      },
      {
        "id": 10,
        "title": "EBS 既定暗号化",
        "text": "新規作成 EBS ボリュームを自動暗号化するにはどの設定を有効にしますか？",
        "choices": [
          "Enable EBS encryption by default",
          "KMS キーの自動ローテーション",
          "EC2 キーペアの強制",
          "SSM パッチポリシー"
        ],
        "answer": "Enable EBS encryption by default",
        "explanation": "アカウント／リージョン単位で既定暗号化を有効にすると以降のボリュームは自動で暗号化されます。"
      },
      {
        "id": 11,
        "title": "パッチコンプライアンス確認",
        "text": "メンテナンスウィンドウでパッチ適用後、結果を確認できる Systems Manager の場所は？",
        "choices": [
          "Patch Manager の Compliance reporting タブ",
          "CloudTrail",
          "Config ルール",
          "SNS ダッシュボード"
        ],
        "answer": "Patch Manager の Compliance reporting タブ",
        "explanation": "ウィンドウタスク後は Patch Manager でノードごとの適用状況を閲覧できます。"
      },
      {
        "id": 12,
        "title": "CloudWatch 異常検知アラーム",
        "text": "異常検知アラームが静的しきい値を使わずに判定する基準は？",
        "choices": [
          "過去データから生成した期待値バンド",
          "直近 5 分の平均値",
          "固定の 80% 閾値",
          "外部 SNS からの通知"
        ],
        "answer": "過去データから生成した期待値バンド",
        "explanation": "ML モデルが季節性を考慮し期待レンジを算出し、逸脱でアラームを発報します。"
      },
      {
        "id": 13,
        "title": "S3 レプリケーションの前提条件",
        "text": "バケット間レプリケーションを有効にするため必須となる設定は？",
        "choices": [
          "ソースと宛先両方のバージョニング有効化",
          "バケット ACL の完全公開",
          "S3 オブジェクトロック",
          "Transfer Acceleration"
        ],
        "answer": "ソースと宛先両方のバージョニング有効化",
        "explanation": "レプリケーションはバージョニングが前提条件として必須です。"
      },
      {
        "id": 14,
        "title": "Parameter Store SecureString",
        "text": "SecureString パラメータの暗号化に使われるサービスは？",
        "choices": [
          "AWS KMS",
          "AWS Certificate Manager",
          "CloudHSM クラスタのみ",
          "Secrets Manager のみ"
        ],
        "answer": "AWS KMS",
        "explanation": "SecureString は KMS (既定 `aws/ssm` か CMK) を用いて保存時に暗号化されます。"
      },
      {
        "id": 15,
        "title": "AWS Backup クロスリージョンコピー",
        "text": "AWS Backup でバックアップを別リージョンへ自動コピーする主な用途は？",
        "choices": [
          "災害対策およびコンプライアンス",
          "スナップショットコスト削減",
          "VPC エンドポイント削減",
          "IAM ポリシー簡素化"
        ],
        "answer": "災害対策およびコンプライアンス",
        "explanation": "リージョン障害対策や距離要件を満たすために遠隔地へコピーできます。"
      },
      {
        "id": 16,
        "title": "CloudFormation Drift Detection",
        "text": "Drift Detection で判定される「ドリフト」とはどの状態を指しますか？",
        "choices": [
          "リソースがテンプレート定義と異なる設定になった",
          "スタックが停止中",
          "テンプレートにコメントがある",
          "Change Set が適用前"
        ],
        "answer": "リソースがテンプレート定義と異なる設定になった",
        "explanation": "外部変更などで実リソースが期待値と差異を持つとドリフト状態になります。"
      },
      {
        "id": 17,
        "title": "Warm Pool の目的",
        "text": "Auto Scaling Warm Pool を導入する主なメリットは？",
        "choices": [
          "起動待ち時間の短縮",
          "IAM ロール数の削減",
          "AMI サイズ削減",
          "Spot 料金固定化"
        ],
        "answer": "起動待ち時間の短縮",
        "explanation": "事前初期化済みインスタンスをプールし、需要時に即時投入できます。"
      },
      {
        "id": 18,
        "title": "Lambda 予約コンカレンシーの制限",
        "text": "デフォルト 1,000 のアカウントコンカレンシーで、予約コンカレンシーを設定する際に必ず残す必要がある未予約枠は？",
        "choices": [
          100,
          0,
          50,
          900
        ],
        "answer": 100,
        "explanation": "少なくとも 100 を未予約プールに残す必要があり、超える設定は受け付けられません。"
      },
      {
        "id": 19,
        "title": "Auto Scaling のヘルスチェックソース",
        "text": "Auto Scaling がインスタンスの不健康判定を受け取れるソースに**含まれない**のは？",
        "choices": [
          "AWS Lambda",
          "Amazon EC2",
          "Elastic Load Balancing",
          "カスタムヘルスチェック"
        ],
        "answer": "AWS Lambda",
        "explanation": "EC2、ELB、EBS、カスタムチェックなどがソースになり、Lambda とは連携しません。"
      },
      {
        "id": 20,
        "title": "Route 53 Health Check を無効化すると",
        "text": "Health Check を `Disabled` に設定した場合、Route 53 はそのリソースをどの状態として扱いますか？",
        "choices": [
          "常に Healthy",
          "常に Unhealthy",
          "Insufficient Data",
          "評価を停止し DNS から除外"
        ],
        "answer": "常に Healthy",
        "explanation": "無効化すると Route 53 はステータスを常に Healthy とみなし、フェイルオーバー先へ切替えません。"
      }
    ]
  },
  "AWS Certified DevOps Engineer – Professional – DOP-C02": {
    "course_detail": {
      "title": "AWS Certified DevOps Engineer – Professional – DOP-C02",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "CodeDeploy の Blue/Green デプロイ目的",
        "text": "Blue/Green デプロイ戦略が従来の In-Place デプロイと比較して最も優れている点は？",
        "choices": [
          "新バージョンを並列環境でテストし、問題があれば即座にロールバックできる",
          "インスタンスを自動的にスケールアップできる",
          "アプリケーションログを自動で暗号化する",
          "DNS 設定を不要にする"
        ],
        "answer": "新バージョンを並列環境でテストし、問題があれば即座にロールバックできる",
        "explanation": "CodeDeploy Blue/Green では旧環境 (blue) を残したまま新環境 (green) を検証し、トラフィックを段階的に切替え失敗時は速やかに元へ戻せます。"
      },
      {
        "id": 2,
        "title": "CodeDeploy 自動ロールバック",
        "text": "デプロイ失敗時に前回の正常バージョンへ⾃動で戻すには、デプロイグループでどの設定を有効にしますか？",
        "choices": [
          "Automatic rollback",
          "LifeCycleEventHooks",
          "MinimumHealthyHosts を 0 に設定",
          "DisableTraffic だけを有効化"
        ],
        "answer": "Automatic rollback",
        "explanation": "デプロイグループ作成・更新時に自動ロールバックを有効にすると、失敗や CloudWatch アラーム発火時に復旧します。"
      },
      {
        "id": 3,
        "title": "Manual Approval アクション",
        "text": "本番リリース前に人の承認を要求するステージを CodePipeline に追加するには？",
        "choices": [
          "Manual approval アクションをステージ内に追加する",
          "CloudFormation 変更セットのみ作成する",
          "SNS トピックをサブスクライブする",
          "CodeDeploy に Deployment hook を追加する"
        ],
        "answer": "Manual approval アクションをステージ内に追加する",
        "explanation": "CodePipeline の Approvals アクションを使い、承認者がコンソールまたは CLI で承認するまでパイプラインは停止します。"
      },
      {
        "id": 4,
        "title": "CodePipeline 変数の利用",
        "text": "上流アクションが生成したコミット ID などを下流アクションで参照するには何を設定しますか？",
        "choices": [
          "アクションに namespace を割り当てて変数を参照する",
          "SSM パラメータを使用",
          "変数は使えない",
          "CloudTrail ログを解析する"
        ],
        "answer": "アクションに namespace を割り当てて変数を参照する",
        "explanation": "アクションに namespace を指定すると、`${Namespace.VariableName}` 形式で下流アクションが値を利用できます。 "
      },
      {
        "id": 5,
        "title": "CloudFormation パラメータオーバーライド",
        "text": "パイプライン実行時にテンプレートのパラメータ値を動的に差し替える CodePipeline 機能は？",
        "choices": [
          "Parameter overrides (Fn::GetArtifactAtt / Fn::GetParam)",
          "Stack policy",
          "Change set execution",
          "Drift detection"
        ],
        "answer": "Parameter overrides (Fn::GetArtifactAtt / Fn::GetParam)",
        "explanation": "CloudFormation アクションで `ParameterOverrides` に組み込み関数を用いると、実行時にアーティファクトの値を渡せます。"
      },
      {
        "id": 6,
        "title": "CodeBuild Report Group",
        "text": "テスト実行結果を可視化し履歴を保持するため CodeBuild で利用するリソースは？",
        "choices": [
          "Report group",
          "Artifact store",
          "Phase context variable",
          "Build badge"
        ],
        "answer": "Report group",
        "explanation": "Report group にテストレポートが集約され、複数ビルドの履歴やパス/失敗率を確認できます。"
      },
      {
        "id": 7,
        "title": "Report Group 自動作成",
        "text": "buildspec に report group 名を記入し、該当 report group が存在しない場合の挙動は？",
        "choices": [
          "CodeBuild が自動で report group を作成する",
          "ビルドは失敗する",
          "レポートは無視される",
          "buildspec が無効になる"
        ],
        "answer": "CodeBuild が自動で report group を作成する",
        "explanation": "buildspec に指定すると実行時に report group が自動生成され、以降のビルドで再利用されます。"
      },
      {
        "id": 8,
        "title": "Drift Detection の目的",
        "text": "CloudFormation における「ドリフト」とは？",
        "choices": [
          "実際のリソース構成がテンプレートから逸脱している状態",
          "変更セットのプレビュー",
          "スタック削除保護が有効",
          "スタックセットが未展開"
        ],
        "answer": "実際のリソース構成がテンプレートから逸脱している状態",
        "explanation": "Drift Detection はスタック・リソースが期待値と異なるかを検出し、差分を詳細に報告します。"
      },
      {
        "id": 9,
        "title": "Change Set の利点",
        "text": "CloudFormation Change Set を使用する主な利点は？",
        "choices": [
          "スタック更新前に影響をプレビューできる",
          "自動的に IAM ロールを作成する",
          "リージョン間で自動レプリケーションする",
          "バージョニングを無効化する"
        ],
        "answer": "スタック更新前に影響をプレビューできる",
        "explanation": "Change Set はリソースの追加・削除・置換などを実行前に確認でき、安全なリリースを支援します。"
      },
      {
        "id": 10,
        "title": "Nested Stack Change Set",
        "text": "ネストされたスタックを使う場合、Change Set でプレビューできる範囲は？",
        "choices": [
          "階層全体のリソース変更",
          "ルートスタックのみ",
          "S3 テンプレートが対象外",
          "ネストレベル 1 まで"
        ],
        "answer": "階層全体のリソース変更",
        "explanation": "CloudFormation は nested stack 階層全体の変更セットを生成し、影響を総覧できます。"
      },
      {
        "id": 11,
        "title": "Composite Alarm の用途",
        "text": "CloudWatch Composite Alarm が推奨される代表的なシナリオは？",
        "choices": [
          "関連アラームをまとめて 1 つのアラートにしノイズを低減する",
          "10 秒粒度のメトリクス取得",
          "SNS トピックの自動作成",
          "ダッシュボードの自動生成"
        ],
        "answer": "関連アラームをまとめて 1 つのアラートにしノイズを低減する",
        "explanation": "Composite Alarm は単独アラームをブール条件で評価し、まとめた指標で通知頻度を最適化します。"
      },
      {
        "id": 12,
        "title": "Systems Manager Runbook",
        "text": "SSM Automation で再利用可能なプロセスを記述したドキュメントは一般に何と呼ばれますか？",
        "choices": [
          "Runbook",
          "Playbook",
          "StepFunction",
          "Patch Group"
        ],
        "answer": "Runbook",
        "explanation": "Automation runbook は JSON/YAML でワークフローを定義し、AWS 提供の多数のプリセットがあります。"
      },
      {
        "id": 13,
        "title": "Blue/Green ロールバック条件",
        "text": "ECS Blue/Green デプロイで CloudWatch アラームを設定し、アラームが発火した場合のデフォルト挙動は？",
        "choices": [
          "デプロイは自動ロールバックされる",
          "デプロイは継続する",
          "手動承認が必要になる",
          "タスクは強制停止されない"
        ],
        "answer": "デプロイは自動ロールバックされる",
        "explanation": "Blue/Green デプロイはモニタリング中にアラームが発火すると直前のリビジョンへロールバックします。"
      },
      {
        "id": 14,
        "title": "Automation Patch Runbook",
        "text": "AWS 提供の `AWS-RunPatchBaseline` runbook を使用した場合に自動で実施される操作は？",
        "choices": [
          "OS パッチ適用と再起動",
          "AMI の自動ビルド",
          "CloudFormation スタック削除",
          "CodeDeploy タグ付け"
        ],
        "answer": "OS パッチ適用と再起動",
        "explanation": "`AWS-RunPatchBaseline` はターゲットに適用可能なパッチを評価・インストールし、必要に応じてリブートします。 "
      },
      {
        "id": 15,
        "title": "CodePipeline ステージロールバック",
        "text": "CloudFormation ステージで失敗時に自動で前回成功リビジョンに戻したい場合のテンプレート設定は？",
        "choices": [
          {
            "OnFailure": "ROLLBACK"
          },
          {
            "AutoExecute": true
          },
          {
            "DriftCheck": "ENABLED"
          },
          {
            "TerminationProtection": true
          }
        ],
        "answer": "OnFailure： ROLLBACK",
        "explanation": "`OnFailure: ROLLBACK` を指定するとステージが失敗時に直前の成功ステートへ戻ります。 "
      },
      {
        "id": 16,
        "title": "CodeDeploy 交通切替待機時間",
        "text": "Blue/Green デプロイで「TerminateBlueInstancesOnDeploymentSuccess.waitTime」 を 0 に設定すると何が起こりますか？",
        "choices": [
          "トラフィック切替完了直後に旧タスクセットが終了する",
          "長さ 1 時間の待機期間が入る",
          "ロールバックが無効になる",
          "デプロイは失敗扱いになる"
        ],
        "answer": "トラフィック切替完了直後に旧タスクセットが終了する",
        "explanation": "waitTime 0 は即時に Blue を停止しリソースコストを最小化します。"
      },
      {
        "id": 17,
        "title": "CloudFormation ChangeSet の安全性",
        "text": "スタック更新で不可逆的な削除が含まれている場合、Change Set にはどのように表示されますか？",
        "choices": [
          {
            "Replacement": true
          },
          "No change",
          {
            "Drifted": true
          },
          {
            "Retain": "Enabled"
          }
        ],
        "answer": "Replacement： True",
        "explanation": "リソース再作成が必要な場合は Replacement フラグが付き、データ損失が起こる可能性を示します。"
      },
      {
        "id": 18,
        "title": "CodePipeline Source Revision Override",
        "text": "特定コミット ID を指定してパイプラインをトリガーしたい場合に使用する CLI は？",
        "choices": [
          "`start-pipeline-execution` で `--source-revision` を指定",
          "`get-pipeline-state`",
          "`put-job-success-result`",
          "`retry-stage-execution`"
        ],
        "answer": "`start-pipeline-execution` で `--source-revision` を指定",
        "explanation": "`aws codepipeline start-pipeline-execution --name <Pipeline> --source-revision <CommitID>` で任意コミットを流せます。 "
      },
      {
        "id": 19,
        "title": "Composite Alarm の Boolean 例",
        "text": "「CPUUtilization > 80 %」と「ELB 5xx エラー > 5」の両方が ALARM の時のみ通知を送りたい場合、Composite Alarm で使用する演算子は？",
        "choices": [
          "AND",
          "OR",
          "NOR",
          "XOR"
        ],
        "answer": "AND",
        "explanation": "compositeRule に `ALARM(\"CPU\") AND ALARM(\"ELB5xx\")` を記述すると両方発火時にアラーム状態になります。"
      },
      {
        "id": 20,
        "title": "CodePipeline 自動ロールバック条件",
        "text": "Blue/Green デプロイメントアクションでロールバックをトリガーする CloudWatch アラームはパイプラインのどのステージに関連付けますか？",
        "choices": [
          "デプロイステージのデプロイグループ",
          "ソースステージ",
          "ビルドステージ",
          "手動承認ステージ"
        ],
        "answer": "デプロイステージのデプロイグループ",
        "explanation": "デプロイアクションで設定したデプロイグループが監視する CloudWatch アラーム発火時に自動ロールバックします。"
      }
    ]
  },
  "AWS Certified Developer – Associate – DVA-C02": {
    "course_detail": {
      "title": "AWS Certified Developer – Associate – DVA-C02",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "プロビジョンドコンカレンシーの効果",
        "text": "AWS Lambda でプロビジョンドコンカレンシーを有効化すると得られる主な利点はどれですか？",
        "choices": [
          "コールドスタートのレイテンシ削減",
          "同時実行上限の増加",
          "デプロイパッケージサイズの削減",
          "実行タイムアウトの延長"
        ],
        "answer": "コールドスタートのレイテンシ削減",
        "explanation": "プロビジョンドコンカレンシーは事前初期化済み環境を確保し、ダブル‐デジットミリ秒の応答を実現します。"
      },
      {
        "id": 2,
        "title": "予約コンカレンシーの目的",
        "text": "ある関数だけが必要な同時実行数を常に確保し、他の関数に影響を与えないようにしたい。設定すべきオプションは？",
        "choices": [
          "予約コンカレンシー",
          "バッチサイズ",
          "オートスケーリンググループ",
          "処理バッチウィンドウ"
        ],
        "answer": "予約コンカレンシー",
        "explanation": "予約コンカレンシーを設定すると、その関数用に最小・最大同時実行数を専有できます。"
      },
      {
        "id": 3,
        "title": "Lambda Layers の利点",
        "text": "Lambda Layers を使用することで得られる典型的なメリットは？",
        "choices": [
          "依存ライブラリを複数関数で共有しデプロイパッケージを軽量化できる",
          "実行タイムアウトを 30 分以上に延長できる",
          "VPC 内 ENI 作成時間を短縮できる",
          "プロビジョンドコンカレンシーを自動設定できる"
        ],
        "answer": "依存ライブラリを複数関数で共有しデプロイパッケージを軽量化できる",
        "explanation": "Layers はライブラリや共通コードを切り出して再利用し、パッケージサイズ・更新回数を削減します。"
      },
      {
        "id": 4,
        "title": "Lambda の DLQ 送信先",
        "text": "Lambda 関数が再試行後も処理できないイベントを自動転送できる先は？",
        "choices": [
          "SQS キューまたは SNS トピック",
          "Amazon Kinesis Data Stream",
          "CloudWatch Logs",
          "Amazon S3"
        ],
        "answer": "SQS キューまたは SNS トピック",
        "explanation": "Lambda は Dead-Letter Queue として SQS/SNS をサポートし、失敗イベントを保存できます。"
      },
      {
        "id": 5,
        "title": "X-Ray Active トレーシング",
        "text": "Lambda 関数で「Active トレーシング」を有効化した場合の動作として正しいものは？",
        "choices": [
          "Lambda が自動でトレースセグメントを作成し X-Ray に送信する",
          "X-Ray エージェントを手動でインストールする必要がある",
          "HTTP ヘッダーに明示的な Trace ID を付与する必要がある",
          "追加 IAM 権限は不要"
        ],
        "answer": "Lambda が自動でトレースセグメントを作成し X-Ray に送信する",
        "explanation": "Active トレーシングでは Lambda サービスがセグメントを生成し、実行ロールに書き込み権限を自動付与します。"
      },
      {
        "id": 6,
        "title": "API Gateway ステージキャッシュ",
        "text": "REST API ステージでキャッシュを有効化した場合のデフォルト TTL は？",
        "choices": [
          "300 秒",
          "60 秒",
          "600 秒",
          "0 秒"
        ],
        "answer": "300 秒",
        "explanation": "API Gateway のデフォルト TTL は 300 秒 (5 分) で、0 に設定するとキャッシュ無効化となります。"
      },
      {
        "id": 7,
        "title": "API Gateway スロットリング",
        "text": "バースト制限とは API Gateway がどのような状況で適用する値ですか？",
        "choices": [
          "短時間に同時到達したリクエスト数の上限",
          "月間総リクエスト数の上限",
          "レスポンスサイズの上限",
          "ステージキャッシュサイズの上限"
        ],
        "answer": "短時間に同時到達したリクエスト数の上限",
        "explanation": "バースト制限は瞬間的なリクエスト急増をバケット方式で制御し、429 を返してバックオフさせます。"
      },
      {
        "id": 8,
        "title": "DynamoDB TransactWriteItems 上限",
        "text": "TransactWriteItems で 1 回のトランザクションに含められる最大アクション数は？",
        "choices": [
          100,
          25,
          500,
          10
        ],
        "answer": 100,
        "explanation": "最大 100 アクション・合計 4 MB を 1 つの ACID トランザクションとして実行できます。"
      },
      {
        "id": 9,
        "title": "DynamoDB トランザクションの特性",
        "text": "TransactWriteItems が「冪等」(idempotent) とされる理由は？",
        "choices": [
          "クライアントが同一リクエストを再送しても 2 回目以降は処理されない",
          "書き込みは最終的整合性になる",
          "各アクションが部分的に成功する",
          "10 秒以内に必ず完了する"
        ],
        "answer": "クライアントが同一リクエストを再送しても 2 回目以降は処理されない",
        "explanation": "トランザクション ID を含むため再試行しても重複実行されず、一貫した結果が得られます。"
      },
      {
        "id": 10,
        "title": "CodeBuild の特徴",
        "text": "AWS CodeBuild を利用すると開発者が不要になる運用タスクは？",
        "choices": [
          "ビルドサーバーのプロビジョニングとスケーリング",
          "ソースコード管理",
          "コンテナイメージの署名",
          "CloudFormation テンプレートの検証"
        ],
        "answer": "ビルドサーバーのプロビジョニングとスケーリング",
        "explanation": "CodeBuild はフルマネージドでビルド環境を動的に起動し、並列ビルドも自動スケールします。"
      },
      {
        "id": 11,
        "title": "Step Functions Callback パターン",
        "text": "ヒトタスクや外部バッチ完了をトークンで待機するステートマシン構築に推奨されるパターンは？",
        "choices": [
          "Callback パターン (Task Token)",
          "Map 並列パターン",
          "Wait (固定時間)",
          "Parallel 状態"
        ],
        "answer": "Callback パターン (Task Token)",
        "explanation": "Task Token を発行し最大 1 年間待機でき、外部システム完了時に SendTaskSuccess を呼び出します。"
      },
      {
        "id": 12,
        "title": "SQS FIFO の重複排除",
        "text": "FIFO キューで **重複排除ウィンドウ** がデフォルトで適用される時間は？",
        "choices": [
          "5 分",
          "1 分",
          "12 時間",
          "0 秒"
        ],
        "answer": "5 分",
        "explanation": "同一メッセージ ID を 5 分以内に再送しても重複は許可されず、Exactly-Once を実現します。"
      },
      {
        "id": 13,
        "title": "SQS メッセージの最大 Visibility Timeout",
        "text": "SQS メッセージの Visibility Timeout が延長できる上限は？",
        "choices": [
          "12 時間",
          "6 時間",
          "24 時間",
          "7 日"
        ],
        "answer": "12 時間",
        "explanation": "Visibility Timeout は受信時点から最大 12 時間までしか延長できません。"
      },
      {
        "id": 14,
        "title": "EventBridge リトライポリシー (デフォルト)",
        "text": "EventBridge がターゲットへの配信に失敗した場合、デフォルトでは最大何時間リトライしますか？",
        "choices": [
          "24 時間",
          "1 時間",
          "48 時間",
          "リトライしない"
        ],
        "answer": "24 時間",
        "explanation": "デフォルトで 24 時間・最大 185 回、指数バックオフとジッターで再試行します。"
      },
      {
        "id": 15,
        "title": "EventBridge スキーマレジストリ",
        "text": "EventBridge スキーマレジストリの主なメリットはどれですか？",
        "choices": [
          "イベント構造を定義しコードバインディングを自動生成できる",
          "イベントを永続保存する",
          "送信失敗イベントを再試行する",
          "クロスリージョンイベントレプリケーションを行う"
        ],
        "answer": "イベント構造を定義しコードバインディングを自動生成できる",
        "explanation": "レジストリは AWS/カスタム/検出済みスキーマを管理し、Java、Python などのコードバインディングをダウンロードできます。"
      },
      {
        "id": 16,
        "title": "アカウント同時実行デフォルト",
        "text": "1 リージョンあたりデフォルトでアカウントに割り当てられる Lambda 同時実行上限は？",
        "choices": [
          "1,000",
          100,
          "5,000",
          "無制限"
        ],
        "answer": "1,000",
        "explanation": "デフォルト上限は 1,000 で、サービスクォータをリクエストして増加可能です。"
      },
      {
        "id": 17,
        "title": "API Gateway キャッシュの効果",
        "text": "ステージキャッシュを有効にすると主にどのリソースが節約されますか？",
        "choices": [
          "バックエンドの呼び出し回数",
          "Lambda 実行時間",
          "IAM ポリシーサイズ",
          "RDS ストレージ"
        ],
        "answer": "バックエンドの呼び出し回数",
        "explanation": "キャッシュヒット時は API Gateway がレスポンスを返し、オリジンサービスへのリクエストを削減します。"
      },
      {
        "id": 18,
        "title": "SQS Dead-Letter Queue の用途",
        "text": "SQS で DLQ を設定する主目的は？",
        "choices": [
          "何度も処理に失敗するメッセージを分離して保管する",
          "メッセージを暗号化する",
          "メッセージを順序付けて配信する",
          "リアルタイムストリーミングを実現する"
        ],
        "answer": "何度も処理に失敗するメッセージを分離して保管する",
        "explanation": "DLQ は最大受信回数を超えたメッセージを隔離し、後続分析・再処理を容易にします。"
      },
      {
        "id": 19,
        "title": "Visibility Timeout 延長時の注意",
        "text": "ChangeMessageVisibility で Visibility Timeout を延長しても **リセットされない** 制限は？",
        "choices": [
          "受信から 12 時間の上限",
          "最大受信回数",
          "キューの保存期間",
          "メッセージサイズ"
        ],
        "answer": "受信から 12 時間の上限",
        "explanation": "Timeout を延長しても 12 時間の総上限は変わらず、その後メッセージが再表示されます。"
      },
      {
        "id": 20,
        "title": "Lambda レイヤーの共有",
        "text": "別 AWS アカウントにレイヤーを共有する方法として正しいのは？",
        "choices": [
          "レイヤーバージョンのリソースベースポリシーに `add-layer-version-permission` を実行する",
          "レイヤー ARN を直接渡すだけでアクセス可能",
          "S3 バケットポリシーを更新する",
          "API Gateway ステージ変数を編集する"
        ],
        "answer": "レイヤーバージョンのリソースベースポリシーに `add-layer-version-permission` を実行する",
        "explanation": "クロスアカウント共有はレイヤーごとに権限付与コマンドで Principal を追加して行います。"
      }
    ]
  },
  "AWS Certified Solutions Architect – Professional – SAP-C02": {
    "course_detail": {
      "title": "AWS Certified Solutions Architect – Professional – SAP-C02",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "Multi-Region Access Points の利点",
        "text": "Amazon S3 Multi-Region Access Points (MRAP) を使用する主な目的は何ですか？",
        "choices": [
          "単一のグローバルエンドポイントから地理的に最も近いバケットへ自動ルーティングする",
          "すべてのリージョン間で整合性を強制する",
          "バケット ACL を自動で作成する",
          "転送中暗号化を不要にする"
        ],
        "answer": "単一のグローバルエンドポイントから地理的に最も近いバケットへ自動ルーティングする",
        "explanation": "MRAP はアプリを 1 つのエンドポイントに向けるだけで、AWS Global Network 上で最適リージョンに接続します。"
      },
      {
        "id": 2,
        "title": "MRAP とレプリケーション",
        "text": "別アカウント所有バケットへも MRAP でレプリケーションしたい場合に推奨される構成は？",
        "choices": [
          "クロスアカウント MRAP でバケットを関連付ける",
          "CloudFront OAC を使う",
          "Transfer Acceleration を併用する",
          "Lambda でオブジェクトコピーを実装する"
        ],
        "answer": "クロスアカウント MRAP でバケットを関連付ける",
        "explanation": "MRAP はクロスアカウント構成をサポートし、アカウント分離した DR も実現できます。"
      },
      {
        "id": 3,
        "title": "S3 Replication Time Control SLA",
        "text": "S3 Replication Time Control (RTC) は 99.9 % のオブジェクトを **何分以内** にレプリケート完了する SLA を提供しますか？",
        "choices": [
          "15 分",
          "60 分",
          "4 時間",
          "24 時間"
        ],
        "answer": "15 分",
        "explanation": "RTC は 99.9 % のオブジェクトを 15 分以内に複製する SLA を持ち、監査要件に対応します。"
      },
      {
        "id": 4,
        "title": "Aurora Global Database の災害対策",
        "text": "Aurora Global Database で推奨される障害時フェイルオーバー方法は？",
        "choices": [
          "マネージドフェイルオーバー (Managed failover)",
          "手動でレプリカプロモーションのみ",
          "RDS EventBridge トリガー",
          "DMS でレプリケーション切替"
        ],
        "answer": "マネージドフェイルオーバー (Managed failover)",
        "explanation": "Managed failover は数十秒で昇格し、旧プライマリを自動でセカンダリに戻すため最小運用で復旧できます。"
      },
      {
        "id": 5,
        "title": "Aurora Global DB RPO",
        "text": "Aurora Global Database はリージョン障害時における目標復旧時点 (RPO) を通常どの程度に抑えられますか？",
        "choices": [
          "1 秒未満",
          "5 分",
          "1 時間",
          "デフォルトでは保証なし"
        ],
        "answer": "1 秒未満",
        "explanation": "書き込みをプライマリリージョンから 1 秒未満でセカンダリへ転送し、RPO ≈ 0 を実現します。"
      },
      {
        "id": 6,
        "title": "StackSets 自動デプロイ",
        "text": "AWS Organizations で新しいアカウントが OU に追加された際、自動で CloudFormation Stack を展開するには何を設定しますか？",
        "choices": [
          "StackSets の「自動デプロイ」を有効化する",
          "Control Tower ライフサイクルイベントを無視する",
          "Service Catalog のポートフォリオ共有",
          "CloudTrail のイベントルール"
        ],
        "answer": "StackSets の「自動デプロイ」を有効化する",
        "explanation": "サービスマネージド権限の StackSets で Auto Deploy をオンにすると、新規アカウントに自動展開します。"
      },
      {
        "id": 7,
        "title": "Control Tower ライフサイクルイベント",
        "text": "自動プロビジョニングパイプラインでアカウント作成後の追加設定を行う場合、Lambda でフックすべき Control Tower イベントは？",
        "choices": [
          "CreateManagedAccount",
          "UpdateCompliance",
          "DeleteOU",
          "EnableRegion"
        ],
        "answer": "CreateManagedAccount",
        "explanation": "CreateManagedAccount イベントにより新規アカウントのガードレール適用完了を検知できます。"
      },
      {
        "id": 8,
        "title": "Transit Gateway 設計ベストプラクティス",
        "text": "Transit Gateway で各 VPC アタッチメントに推奨されるサブネット設計は？",
        "choices": [
          "各 AZ に /28 の専用サブネットを用意する",
          "既存アプリサブネットを共有する",
          "/16 を割り当てる",
          "サブネットを作成しない"
        ],
        "answer": "各 AZ に /28 の専用サブネットを用意する",
        "explanation": "専用小 CIDR を使い、サブネット ACL をオープンに保つことが推奨されています。"
      },
      {
        "id": 9,
        "title": "TGW ルート分離",
        "text": "TGW ルートテーブルを分離しインフラ宛とアプリ宛を使い分ける主な利点は？",
        "choices": [
          "トラフィック分離ときめ細かなセキュリティ制御",
          "コスト削減",
          "DNS レイテンシ削減",
          "インスタンス数削減"
        ],
        "answer": "トラフィック分離ときめ細かなセキュリティ制御",
        "explanation": "ルートテーブルを複数に分けることで部門間・方向別ポリシーを明確にできます。"
      },
      {
        "id": 10,
        "title": "Direct Connect SiteLink",
        "text": "Direct Connect SiteLink を利用する主なメリットは？",
        "choices": [
          "AWS グローバルネットワーク経由で拠点間通信を高速化し、プライベート回線を簡素化",
          "DX 上限速度を 100 Gbps へ引き上げる",
          "NAT Gateway を不要にする",
          "IPv6 を IPv4 に変換する"
        ],
        "answer": "AWS グローバルネットワーク経由で拠点間通信を高速化し、プライベート回線を簡素化",
        "explanation": "SiteLink でオンプレ拠点同士を AWS ネットワークでメッシュ接続でき、帯域と遅延が改善します。"
      },
      {
        "id": 11,
        "title": "Elastic Disaster Recovery リソース効率",
        "text": "AWS Elastic Disaster Recovery (DRS) で **1** つの Replication Server が扱える最大ソースディスク数は？",
        "choices": [
          15,
          5,
          1,
          32
        ],
        "answer": 15,
        "explanation": "DRS は Replication Server 1 台につき最大 15 ディスクを処理し、コストを抑えます。"
      },
      {
        "id": 12,
        "title": "AWS Backup クロスアカウント",
        "text": "異なる AWS アカウントかつ別リージョンへバックアップコピーを自動化するために必要な設定は？",
        "choices": [
          "共有されたバックアップボルトとクロスアカウント IAM 権限",
          "VPC ピアリング",
          "DMS レプリケーションインスタンス",
          "Storage Gateway"
        ],
        "answer": "共有されたバックアップボルトとクロスアカウント IAM 権限",
        "explanation": "クロスアカウントコピーではコピー先ボルトを共有し、ロールに `backup:CopyFromBackupVault` などを許可します。"
      },
      {
        "id": 13,
        "title": "AWS Config Conformance Packs",
        "text": "組織単位 (OU) 全体へ一括でガバナンスルールをデプロイする推奨方法は？",
        "choices": [
          "Organization Conformance Pack",
          "個別アカウントに手動ルール作成",
          "クラウドトレイルのみ",
          "Amazon Inspector"
        ],
        "answer": "Organization Conformance Pack",
        "explanation": "Organization Conformance Pack は StackSets を利用して全アカウントにカスタム/マネージドルールを展開します。"
      },
      {
        "id": 14,
        "title": "MRAP ルーティングの前提",
        "text": "MRAP グローバルエンドポイントがリクエストを最適リージョンへルーティングする際に指標として参照するのは？",
        "choices": [
          "AWS Global Accelerator のパフォーマンス計測",
          "クライアントの IP ジオロケーションのみ",
          "バケット名のハッシュ",
          "S3 RTC レイテンシ"
        ],
        "answer": "AWS Global Accelerator のパフォーマンス計測",
        "explanation": "MRAP は Global Accelerator のネットワーク測定データを活用して最短パスへルーティングします。"
      },
      {
        "id": 15,
        "title": "DRS 最適ディスク設定",
        "text": "DRS で「Auto」ディスク設定を選択すると得られる主な利点は？",
        "choices": [
          "最小限の Replication Server 数でコスト削減",
          "レプリケーション RPO が 0 になる",
          "暗号化キーが不要",
          "物理サーバーも対象にできる"
        ],
        "answer": "最小限の Replication Server 数でコスト削減",
        "explanation": "Auto はディスク毎に最適化されるため必要最小の Replication Server を配置します。"
      },
      {
        "id": 16,
        "title": "TGW ピアリングアタッチメント",
        "text": "別リージョンの Transit Gateway 間でルーティングを可能にする機能は？",
        "choices": [
          "Transit Gateway ピアリングアタッチメント",
          "VPC ピアリング",
          "Direct Connect Gateway",
          "VPN CloudHub"
        ],
        "answer": "Transit Gateway ピアリングアタッチメント",
        "explanation": "ピアリングアタッチメントは同一・異なるリージョン TGW を直接接続し、Route Table で制御します。"
      },
      {
        "id": 17,
        "title": "StackSets 削除ポリシー",
        "text": "StackSets の自動デプロイ解除時にリソースを残す選択肢はどれですか？",
        "choices": [
          "RETAIN スタック",
          "DELETE スタック",
          "SNAPSHOT スタック",
          "SUSPEND スタック"
        ],
        "answer": "RETAIN スタック",
        "explanation": "Auto Deploy 設定でアカウントが OU から外れた際、RETAIN を選ぶとスタック・リソースを残します。"
      },
      {
        "id": 18,
        "title": "Direct Connect パフォーマンス確保",
        "text": "ハイブリッド接続で予測可能な遅延とスループットを確保したい場合、AWS が推奨する接続オプションは？",
        "choices": [
          "AWS Direct Connect",
          "インターネット VPN",
          "ロードバランサー経由",
          "SFTP"
        ],
        "answer": "AWS Direct Connect",
        "explanation": "Direct Connect は専用線で一定の帯域と低遅延を保証します。"
      },
      {
        "id": 19,
        "title": "S3 レプリケーションの必須要件",
        "text": "オブジェクトレプリケーション (CRR/SRR または RTC) を有効にする前に **必ず**両バケットで設定しておく必要があるのは？",
        "choices": [
          "バージョニング",
          "オブジェクトロック",
          "プレフィックスルール",
          "ライフサイクルルール"
        ],
        "answer": "バージョニング",
        "explanation": "S3 レプリケーションはバージョニングが前提条件です。"
      },
      {
        "id": 20,
        "title": "Conformance Pack と StackSets 連携",
        "text": "Organization Conformance Pack をデプロイするとき、実際に各アカウントへスタックを作成するサービスは？",
        "choices": [
          "AWS CloudFormation StackSets",
          "AWS Service Catalog",
          "AWS OpsWorks Stacks",
          "AWS Control Tower"
        ],
        "answer": "AWS CloudFormation StackSets",
        "explanation": "Organization Conformance Pack の裏側は管理型 StackSets によりルールスタックが広域配布されます。"
      }
    ]
  },
  "AWS Certified Cloud Practitioner – CLF-C02": {
    "course_detail": {
      "title": "AWS Certified Cloud Practitioner – CLF-C02",
      "question_number": 5
    },
    "questions": [
      {
        "id": 1,
        "title": "共有責任モデルの境界",
        "text": "AWS の共有責任モデルで「物理施設のセキュリティ」を担うのは誰ですか？",
        "choices": [
          "お客様",
          "AWS",
          "AWS とお客様の共同",
          "外部監査機関"
        ],
        "answer": "AWS",
        "explanation": "AWS はデータセンターの物理セキュリティとハイパーバイザーなどインフラ層を管理します。"
      },
      {
        "id": 2,
        "title": "S3 ストレージクラスの選択",
        "text": "「アクセス頻度は低いがミリ秒レイテンシで即時取り出しが必要」な場合に推奨される S3 ストレージクラスは？",
        "choices": [
          "S3 Standard",
          "S3 Standard-IA",
          "S3 One Zone-IA",
          "S3 Glacier Deep Archive"
        ],
        "answer": "S3 Standard-IA",
        "explanation": "Standard-IA は長期保管・低頻度アクセス向けで、ミリ秒アクセスを維持しつつコストを抑えます。"
      },
      {
        "id": 3,
        "title": "コスト可視化ツール",
        "text": "過去 13 か月の利用状況をグラフで分析でき、翌 12 か月のコスト予測も表示できるサービスは？",
        "choices": [
          "AWS Budgets",
          "AWS Cost Explorer",
          "AWS Cost and Usage Report",
          "AWS Pricing Calculator"
        ],
        "answer": "AWS Cost Explorer",
        "explanation": "Cost Explorer はインタラクティブグラフと予測モデルを提供します。"
      },
      {
        "id": 4,
        "title": "高可用データベース設計",
        "text": "プロダクション RDS を単一リージョン内で高可用にする最も一般的な構成は？",
        "choices": [
          "マルチ-AZ 配置",
          "リードレプリカのみ",
          "スナップショットを別リージョンへコピー",
          "クロスリージョンリードレプリカ"
        ],
        "answer": "マルチ-AZ 配置",
        "explanation": "マルチ-AZ はスタンバイインスタンスへの自動フェイルオーバーを提供します。"
      },
      {
        "id": 5,
        "title": "低レイテンシ配信",
        "text": "静的・動的コンテンツを世界中のエッジロケーションから配信してレイテンシを最小化するサービスは？",
        "choices": [
          "Amazon CloudFront",
          "AWS Global Accelerator",
          "Amazon Route 53",
          "AWS Direct Connect"
        ],
        "answer": "Amazon CloudFront",
        "explanation": "CloudFront はグローバル CDN で数百 Tbps の容量を有します。"
      },
      {
        "id": 6,
        "title": "フェデレーション認証",
        "text": "社内 IdP から SAML 2.0 を用いて AWS リソースへ一時的にアクセスする際に設定するのは？",
        "choices": [
          "IAM ロールと SAML プロバイダー",
          "IAM ユーザーに長期アクセスキー",
          "Amazon Cognito ID プール",
          "AWS SSO の OIDC"
        ],
        "answer": "IAM ロールと SAML プロバイダー",
        "explanation": "SAML フェデレーションでは IdP を IAM に登録し、信頼されたロールを AssumeRoleWithSAML で取得します。"
      },
      {
        "id": 7,
        "title": "大量メール送信",
        "text": "ターゲット広告メールを安価に大量送信したい場合に最適な AWS サービスは？",
        "choices": [
          "Amazon Simple Email Service (SES)",
          "Amazon Simple Notification Service (SNS)",
          "Amazon Simple Queue Service (SQS)",
          "Amazon WorkMail"
        ],
        "answer": "Amazon Simple Email Service (SES)",
        "explanation": "SES は高い到達率と従量課金でスケールするメールプラットフォームです。"
      },
      {
        "id": 8,
        "title": "EC2 詳細モニタリング",
        "text": "EC2 インスタンスで詳細モニタリングを有効にした場合、CloudWatch メトリクスの最小粒度は？",
        "choices": [
          "1 分",
          "5 分",
          "30 秒",
          "10 秒"
        ],
        "answer": "1 分",
        "explanation": "詳細モニタリングでは 1 分間隔のメトリクスが取得できます（標準は 5 分）。"
      },
      {
        "id": 9,
        "title": "コストアラート",
        "text": "利用料金が設定した閾値に近づいた際にメール通知を送る機能を提供するサービスは？",
        "choices": [
          "AWS Budgets",
          "AWS Cost Explorer",
          "AWS Marketplace Subscriptions",
          "AWS Billing Dashboard"
        ],
        "answer": "AWS Budgets",
        "explanation": "Budgets はコスト・使用量・ RI/SP 利用率などのアラートを設定可能です。"
      },
      {
        "id": 10,
        "title": "エンタープライズサポート",
        "text": "専任のテクニカルアカウントマネージャー (TAM) が提供される AWS サポートプランは？",
        "choices": [
          "Developer",
          "Business",
          "Enterprise On-Ramp",
          "Enterprise"
        ],
        "answer": "Enterprise",
        "explanation": "Enterprise プランでは TAM による運用レビューやコスト最適化支援が含まれます。"
      },
      {
        "id": 11,
        "title": "サーバーレス NoSQL",
        "text": "シームレスなスケーリングとミリ秒レイテンシを提供するフルマネージド NoSQL キー・バリューストアは？",
        "choices": [
          "Amazon DynamoDB",
          "Amazon ElastiCache (Redis)",
          "Amazon DocumentDB",
          "Amazon Neptune"
        ],
        "answer": "Amazon DynamoDB",
        "explanation": "DynamoDB はパーティション自動分割で高スループットを維持します。"
      },
      {
        "id": 12,
        "title": "イベント統合",
        "text": "SaaS アプリと AWS サービスのイベントを統合しターゲットへルーティングするサービスは？",
        "choices": [
          "Amazon EventBridge",
          "Amazon Kinesis Data Streams",
          "AWS Step Functions",
          "Amazon MQ"
        ],
        "answer": "Amazon EventBridge",
        "explanation": "EventBridge は少なくとも 1 回の配信と 24 時間リトライを保証します。"
      },
      {
        "id": 13,
        "title": "クロスリージョンバックアップ",
        "text": "規制対応でバックアップを別リージョンへ自動コピーしたい。最もシンプルな方法は？",
        "choices": [
          "AWS Backup プランでクロスリージョンコピーを設定",
          "S3 バケットレプリケーション",
          "Lambda でスナップショットコピーを自動化",
          "DataSync で転送"
        ],
        "answer": "AWS Backup プランでクロスリージョンコピーを設定",
        "explanation": "AWS Backup のポリシーにコピー先リージョンを追加するだけで自動化できます。"
      },
      {
        "id": 14,
        "title": "機密データ検出",
        "text": "S3 内の PII を機械学習で検出しダッシュボード表示できるサービスは？",
        "choices": [
          "Amazon Macie",
          "Amazon Inspector",
          "AWS GuardDuty",
          "AWS Config"
        ],
        "answer": "Amazon Macie",
        "explanation": "Macie は定義済み識別子と ML を使いクレジットカード番号や住所などを検出します。"
      },
      {
        "id": 15,
        "title": "ネットワーク ACL の特徴",
        "text": "VPC の Network ACL が「ステートレス」であるという説明として正しいのは？",
        "choices": [
          "返信トラフィックも個別に許可ルールが必要",
          "一度許可するとすべての戻り通信が自動許可",
          "SG と同様にインスタンス単位で適用",
          "ルールは優先度ではなく作成順で評価"
        ],
        "answer": "返信トラフィックも個別に許可ルールが必要",
        "explanation": "Network ACL はステートを持たず戻りパケットも明示的に許可する必要があります。"
      },
      {
        "id": 16,
        "title": "Lambda 課金単位",
        "text": "Lambda の実行コストはどの単位で課金されますか？",
        "choices": [
          "リクエスト数と GB-秒",
          "vCPU-時間",
          "常時稼働時間",
          "コンテナ数"
        ],
        "answer": "リクエスト数と GB-秒",
        "explanation": "実行回数と実行時間×メモリサイズ (GB-秒) に基づき課金されます。"
      },
      {
        "id": 17,
        "title": "サーバーレス SQL",
        "text": "Amazon S3 上のデータに直接 SQL を実行できるサービスは？",
        "choices": [
          "Amazon Athena",
          "Amazon Redshift",
          "AWS Glue ETL",
          "Amazon EMR"
        ],
        "answer": "Amazon Athena",
        "explanation": "Athena はサーバーレスで、クエリごとに料金が発生します。"
      },
      {
        "id": 18,
        "title": "個人化レコメンド",
        "text": "行動履歴からリアルタイムに商品レコメンドを生成するマネージド AI サービスは？",
        "choices": [
          "Amazon Personalize",
          "Amazon Forecast",
          "Amazon Rekognition",
          "Amazon Textract"
        ],
        "answer": "Amazon Personalize",
        "explanation": "Personalize はユーザー・アイテム・インタラクションを学習し推論エンドポイントを提供します。"
      },
      {
        "id": 19,
        "title": "RTO の定義",
        "text": "DR 計画で用いられる RTO (Recovery Time Objective) の意味は？",
        "choices": [
          "サービスを再開するまでの許容停止時間",
          "許容データ損失量",
          "年間稼働率",
          "障害発生確率"
        ],
        "answer": "サービスを再開するまでの許容停止時間",
        "explanation": "RTO は業務再開に要しても許容される最大時間を示します。"
      },
      {
        "id": 20,
        "title": "Trusted Advisor のチェックカテゴリー",
        "text": "Trusted Advisor が提供する 5 つの主要チェックカテゴリに **含まれない** のはどれ？",
        "choices": [
          "運用サポート",
          "コスト最適化",
          "パフォーマンス",
          "セキュリティ"
        ],
        "answer": "運用サポート",
        "explanation": "Trusted Advisor のカテゴリはコスト、セキュリティ、パフォーマンス、フォールトトレランス、サービス制限です。"
      }
    ]
  },
  "AWS Certified Security – Specialty – SCS-C02": {
    "course_detail": {
      "title": "AWS Certified Security – Specialty – SCS-C02",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "MFA 強制に使う Condition キー",
        "text": "IAM ポリシーで多要素認証 (MFA) を必須にする際、Condition で使用するグローバルキーはどれですか？",
        "choices": [
          "aws:MultiFactorAuthPresent",
          "aws:SecureTransport",
          "sts:ExternalId",
          "iam:PassedToService"
        ],
        "answer": "aws:MultiFactorAuthPresent",
        "explanation": "`aws:MultiFactorAuthPresent` が true のリクエストだけ許可することで MFA を強制できます。 "
      },
      {
        "id": 2,
        "title": "Tor 経由の不正 API コール検出",
        "text": "GuardDuty で IAM 資格情報が Tor ネットワークから悪用された場合に発生する Finding タイプは？",
        "choices": [
          "UnauthorizedAccess:IAMUser/TorIPCaller",
          "CryptoCurrency:EC2/BitcoinTool.B!DNS",
          "Recon:EC2/PortProbeUnprotectedPort",
          "PenTest:IAMUser/KaliLinux"
        ],
        "answer": "UnauthorizedAccess:IAMUser/TorIPCaller",
        "explanation": "Tor IP からの API コールを検出すると GuardDuty はこの IAM Finding を生成します。"
      },
      {
        "id": 3,
        "title": "CMK の自動ローテーション周期",
        "text": "Customer managed KMS キーで **Automatic key rotation** を有効にすると、新しい暗号鍵素材は何年ごとに生成されますか？",
        "choices": [
          "1 年",
          "90 日",
          "2 年",
          "ローテーション不可"
        ],
        "answer": "1 年",
        "explanation": "自動ローテーションを有効化すると、KMS が 365 日ごとに新しい素材を生成します。"
      },
      {
        "id": 4,
        "title": "Macie のクレジットカード検出",
        "text": "S3 に保存されたクレジットカード番号を検出する際に Macie が利用する仕組みは？",
        "choices": [
          "Managed data identifier",
          "カスタム発見ルールのみ",
          "S3 Event Notification",
          "GuardDuty 統合"
        ],
        "answer": "Managed data identifier",
        "explanation": "Macie は金融情報向けなど 150 以上の Managed data identifier で機密データを判定します。"
      },
      {
        "id": 5,
        "title": "WORM 要件の実装",
        "text": "オブジェクトを **Write Once Read Many (WORM)** で保護し、管理者による削除・上書きを禁止する S3 機能は？",
        "choices": [
          "Object Lock Compliance モード",
          "バージョニングのみ",
          "Glacier Instant Retrieval",
          "リクエストプレイサーバーサイド暗号化"
        ],
        "answer": "Object Lock Compliance モード",
        "explanation": "Compliance モードでは保持期間中、root でも変更できない WORM 保護が適用されます。"
      },
      {
        "id": 6,
        "title": "CloudTrail 改ざん検知",
        "text": "CloudTrail ログが改ざんされていないことを証明する AWS ネイティブ機能は？",
        "choices": [
          "Log file integrity validation",
          "CloudTrail Lake",
          "CloudWatch Insights",
          "KMS 透過暗号化"
        ],
        "answer": "Log file integrity validation",
        "explanation": "SHA-256 ハッシュと RSA 署名で整合性を確認でき、CLI で検証可能です。"
      },
      {
        "id": 7,
        "title": "Security Hub の評価エンジン",
        "text": "Security Hub が大部分のコントロール評価に内部的に利用しているサービスは？",
        "choices": [
          "AWS Config ルール",
          "Amazon Inspector",
          "AWS Shield",
          "Amazon Macie"
        ],
        "answer": "AWS Config ルール",
        "explanation": "Security Hub の CSPM 機能は AWS Config のルール結果を基にコンプライアンス判定を行います。"
      },
      {
        "id": 8,
        "title": "Access Analyzer 外部アクセス検出",
        "text": "IAM Access Analyzer が「外部アクセス」ファインディングを生成する条件は？",
        "choices": [
          "ゾーンオブトラスト外の主体にリソースベースポリシーがアクセスを許可している",
          "VPC セキュリティグループが 0.0.0.0/0 を許可している",
          "CloudTrail が無効",
          "S3 バケットが暗号化されていない"
        ],
        "answer": "ゾーンオブトラスト外の主体にリソースベースポリシーがアクセスを許可している",
        "explanation": "Resource-based ポリシーが外部プリンシパルに権限を付与すると Access Analyzer が検出します。"
      },
      {
        "id": 9,
        "title": "Shield Advanced 自動保護",
        "text": "Shield Advanced 契約中、追加設定なしで自動的に保護対象となるサービスは？",
        "choices": [
          "Amazon Route 53",
          "Amazon SQS",
          "Amazon OpenSearch Service",
          "AWS AppSync"
        ],
        "answer": "Amazon Route 53",
        "explanation": "Shield Advanced は CloudFront・ALB/NLB・Route 53 などを追加コストなく自動オンボードします。"
      },
      {
        "id": 10,
        "title": "Inspector と ECR 連携",
        "text": "Amazon Inspector の **Enhanced scanning** を有効にすると自動でスキャンされる対象は？",
        "choices": [
          "Amazon ECR に push されたコンテナイメージ",
          "S3 バケットの PDF",
          "EC2 インスタンスのユーザーデータ",
          "IAM ポリシードキュメント"
        ],
        "answer": "Amazon ECR に push されたコンテナイメージ",
        "explanation": "Inspector は ECR リポジトリの OS/言語パッケージ脆弱性を push 時や定期でスキャンします。"
      },
      {
        "id": 11,
        "title": "Secrets Manager ローテーション",
        "text": "Secrets Manager で自動ローテーションを構成すると、シークレットの更新を実施するのは何ですか？",
        "choices": [
          "Lambda 関数",
          "EC2 Systems Manager",
          "手動 CLI 操作",
          "Kinesis Data Firehose"
        ],
        "answer": "Lambda 関数",
        "explanation": "ローテーションスケジュールに従い、Secrets Manager が指定の Lambda を呼び出します。"
      },
      {
        "id": 12,
        "title": "Session Manager の通信要件",
        "text": "Session Manager で EC2 に接続する際、**不要** となるネットワーク要素は？",
        "choices": [
          "インバウンド SSH (22) ポート開放",
          "SSM Agent",
          "IAM ロール",
          "アウトバウンド HTTPS"
        ],
        "answer": "インバウンド SSH (22) ポート開放",
        "explanation": "Session Manager はアウトバウンド通信のみで接続でき、踏み台や公開ポートが不要です。"
      },
      {
        "id": 13,
        "title": "Flow Logs action フィールド",
        "text": "VPC Flow Logs の **action** フィールドで記録される代表的な値は？",
        "choices": [
          "ACCEPT / REJECT",
          "ALLOW / DENY",
          "SUCCESS / FAILURE",
          "PASS / DROP"
        ],
        "answer": "ACCEPT / REJECT",
        "explanation": "パケットが SG/NACL で許可されたか拒否されたかを示す値として `ACCEPT` と `REJECT` が記録されます。"
      },
      {
        "id": 14,
        "title": "組織全体のコンプライアンス適用",
        "text": "AWS Config で OU 全体に共通ルールと修復を展開する最も効率的な方法は？",
        "choices": [
          "Organization Conformance Pack",
          "個別アカウントでカスタムルール作成",
          "Trusted Advisor",
          "GuardDuty のみ"
        ],
        "answer": "Organization Conformance Pack",
        "explanation": "Organization Conformance Pack は StackSets を用いてルールと修復を組織全体に配布します。"
      },
      {
        "id": 15,
        "title": "Detective の調査機能",
        "text": "Detective が GuardDuty Findings を取り込みグラフ表示する主目的は？",
        "choices": [
          "関連エンティティを可視化して根本原因分析を容易にする",
          "メトリクスを 1 分粒度で収集",
          "暗号化を自動で有効化",
          "IAM ポリシーを削減"
        ],
        "answer": "関連エンティティを可視化して根本原因分析を容易にする",
        "explanation": "Detective は GuardDuty/FMS/Inspector などのイベントを行動グラフに統合し、攻撃経路を追跡します。"
      },
      {
        "id": 16,
        "title": "SQLi 攻撃用 AWS Managed WAF ルール",
        "text": "SQL インジェクションを防ぐために最小構成で適用できる AWS Managed Rule は？",
        "choices": [
          "AWSManagedRulesSQLiRuleSet",
          "AWSManagedRulesCommonRuleSet",
          "AWSManagedRulesAnonymousIpList",
          "AWSManagedRulesLinuxRuleSet"
        ],
        "answer": "AWSManagedRulesSQLiRuleSet",
        "explanation": "SQLiRuleSet は SQL インジェクション特化シグネチャを提供し、追加設定なしで適用可能です。"
      },
      {
        "id": 17,
        "title": "AWS 管理キーのローテーション",
        "text": "`aws/*` プレフィックスの AWS 管理 KMS キーはどのようにローテーションされますか？",
        "choices": [
          "毎年自動ローテーションされ、ユーザー操作は不要",
          "手動でのみローテーション可能",
          "90 日ごとにローテーション",
          "ローテーションされない"
        ],
        "answer": "毎年自動ローテーションされ、ユーザー操作は不要",
        "explanation": "AWS 管理キーは 1 年ごとに自動で新しいキー素材へ置き換わります。"
      },
      {
        "id": 18,
        "title": "External ID の目的",
        "text": "クロスアカウント AssumeRole で **External ID** を使用する主な理由は？",
        "choices": [
          "Confused deputy 問題を防ぐ",
          "MFA をバイパスする",
          "STS トークンを永続化する",
          "SAML 認証を簡素化する"
        ],
        "answer": "Confused deputy 問題を防ぐ",
        "explanation": "外部 ID により第三者が想定外のロールを乗っ取るリスク (confused deputy) を防止します。"
      },
      {
        "id": 19,
        "title": "EBS 既定暗号化",
        "text": "新規作成される EBS ボリュームを常に暗号化するには、どの機能を有効化しますか？",
        "choices": [
          "Enable EBS encryption by default",
          "KMS キーの自動ローテーション",
          "CloudTrail Lake",
          "S3 サーバサイド暗号化"
        ],
        "answer": "Enable EBS encryption by default",
        "explanation": "アカウント・リージョン単位で設定すると以後のボリューム/Snapshot は自動的に暗号化されます。"
      },
      {
        "id": 20,
        "title": "暗号通貨マイニングの検出",
        "text": "EC2 インスタンスがマルウェアによって暗号通貨採掘に利用されている可能性を GuardDuty が検出した際の Finding タイプは？",
        "choices": [
          "CryptoCurrency:EC2/BitcoinTool.B!DNS",
          "Trojan:EC2/BlackholeTraffic",
          "UnauthorizedAccess:IAMUser/TorIPCaller",
          "PenTest:IAMUser/KaliLinux"
        ],
        "answer": "CryptoCurrency:EC2/BitcoinTool.B!DNS",
        "explanation": "BitcoinTool.B 系の DNS クエリを検知し、マイニング活動を示唆する Finding を生成します。"
      }
    ]
  },
  "AWS Certified Machine Learning Engineer – Associate – MLA-C01": {
    "course_detail": {
      "title": "AWS Certified Machine Learning Engineer – Associate – MLA-C01",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "パイプラインのモデル登録ステップ",
        "text": "SageMaker Pipelines でトレーニング済みモデルをモデルレジストリに登録する専用ステップはどれですか？",
        "choices": [
          "TrainingStep",
          "ProcessingStep",
          "ModelStep",
          "CallbackStep"
        ],
        "answer": "ModelStep",
        "explanation": "ModelStep は学習済み Model または PipelineModel を SageMaker Model Registry に登録するために使用します。"
      },
      {
        "id": 2,
        "title": "Model Monitor ベースライン",
        "text": "リアルタイムエンドポイントでモデルドリフトを検出する前に必要な初期タスクは？",
        "choices": [
          "スケジュールジョブの作成より先にバイアス・データドリフトのベースラインを作成する",
          "CloudWatch メトリクスを有効化する",
          "Endpoint をマルチモデル化する",
          "Neo でコンパイルする"
        ],
        "answer": "スケジュールジョブの作成より先にバイアス・データドリフトのベースラインを作成する",
        "explanation": "Model Monitor では最初に基準統計を算出するベースラインジョブを実行してからスケジュールジョブを設定します。"
      },
      {
        "id": 3,
        "title": "Clarify バイアス検出フェーズ",
        "text": "SageMaker Clarify において「Pre-training」と「Post-training」の違いで最も正しい説明は？",
        "choices": [
          "前者は生データのバイアス、後者はモデル出力のバイアスを測定する",
          "前者は推論レイテンシ、後者はトレーニング時間を測定する",
          "前者は GPU 使用率、後者は CPU 使用率を測定する",
          "両者とも同じ指標を測定し違いはない"
        ],
        "answer": "前者は生データのバイアス、後者はモデル出力のバイアスを測定する",
        "explanation": "Clarify は学習前データと学習後予測結果に対して 11 種のバイアス指標を個別に算出します。"
      },
      {
        "id": 4,
        "title": "自動モデルチューニング戦略",
        "text": "Automatic Model Tuning がハイパーパラメータ探索に採用するデフォルトアルゴリズムは？",
        "choices": [
          "ベイズ最適化",
          "グリッドサーチ",
          "遺伝的アルゴリズム",
          "強化学習"
        ],
        "answer": "ベイズ最適化",
        "explanation": "SageMaker のチューニングは既定でベイズ最適化を用い、過去ジョブの結果を踏まえて次の候補を選択します。"
      },
      {
        "id": 5,
        "title": "Feature Store オンライン vs オフライン",
        "text": "オンラインストアとオフラインストアの主な使い分けは？",
        "choices": [
          "前者はリアルタイム推論、後者はバッチ学習や再トレーニング用",
          "前者は長期保持、後者は最新のみ保持",
          "両者とも同じ用途",
          "前者は無料、後者は有料"
        ],
        "answer": "前者はリアルタイム推論、後者はバッチ学習や再トレーニング用",
        "explanation": "オンラインストアは低レイテンシ取得、オフラインストアは完全履歴を保持して分析に利用されます。"
      },
      {
        "id": 6,
        "title": "Feature Store データ保持",
        "text": "オンラインストアが保持するレコードは通常どのような形ですか？",
        "choices": [
          "最新レコードのみ",
          "全ての履歴",
          "ランダムサンプリング",
          "集約統計値"
        ],
        "answer": "最新レコードのみ",
        "explanation": "オンラインストアは最新状態のみを保持し、履歴はオフラインストアに保存されます。"
      },
      {
        "id": 7,
        "title": "マルチモデルエンドポイントの適用",
        "text": "マルチモデルエンドポイントが最もコスト効率を発揮する状況は？",
        "choices": [
          "同一フレームワークの多数モデルでアクセス頻度がばらつく場合",
          "GPU 使用率が常に 100 % の高負荷モデルのみをデプロイする場合",
          "単一巨大モデルで最小レイテンシを求める場合",
          "モデルごとに異なるコンテナが必要な場合"
        ],
        "answer": "同一フレームワークの多数モデルでアクセス頻度がばらつく場合",
        "explanation": "マルチモデルエンドポイントはリソースを共有し、コールドスタート許容のワークロードで大幅なコスト削減を可能にします。"
      },
      {
        "id": 8,
        "title": "Managed Spot Training のコスト削減",
        "text": "Managed Spot Training を有効化するとオンデマンド比で最大何 % のコスト削減が期待できますか？",
        "choices": [
          "90 %",
          "50 %",
          "25 %",
          "10 %"
        ],
        "answer": "90 %",
        "explanation": "公式ドキュメントでは最大 90 % まで学習コストを削減できると明記されています。"
      },
      {
        "id": 9,
        "title": "Pipe モードの利点",
        "text": "SageMaker トレーニングで Pipe モードを選択する主要な利点は？",
        "choices": [
          "S3 からデータをストリーミングしジョブ開始時間とスループットを改善する",
          "データをローカルに完全コピーし障害耐性を高める",
          "GPU メモリを節約できる",
          "モデルサイズを圧縮できる"
        ],
        "answer": "S3 からデータをストリーミングしジョブ開始時間とスループットを改善する",
        "explanation": "Pipe モードはデータをコンテナへストリームし、起動を高速化してストレージ消費も抑えます。"
      },
      {
        "id": 10,
        "title": "Debugger ルールの役割",
        "text": "SageMaker Debugger の **built-in rules** が提供する主な価値は？",
        "choices": [
          "トレーニング中テンソルやシステムメトリクスを監視し異常を自動検出する",
          "学習データを自動ラベル付けする",
          "モデルを自動的にデプロイする",
          "コストレポートを生成する"
        ],
        "answer": "トレーニング中テンソルやシステムメトリクスを監視し異常を自動検出する",
        "explanation": "Debugger は勾配消失やリソースボトルネックなどをルールで検知し、早期対応を支援します。"
      },
      {
        "id": 11,
        "title": "SageMaker Neo のサポート範囲",
        "text": "Neo がクラウドとエッジ向け最適化をサポートする主要フレームワークに **含まれない** ものは？",
        "choices": [
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
          "MXNet"
        ],
        "answer": "Scikit-learn",
        "explanation": "Neo は TensorFlow、PyTorch、MXNet などの DL フレームワークを対象とし、Scikit-learn は直接サポートされていません。"
      },
      {
        "id": 12,
        "title": "Ground Truth 自動ラベル付け",
        "text": "Amazon SageMaker Ground Truth の「Auto-labeling」が活用する ML 技法は？",
        "choices": [
          "アクティブラーニング",
          "強化学習",
          "転移学習",
          "GAN"
        ],
        "answer": "アクティブラーニング",
        "explanation": "難易度の高いサンプルのみを人に依頼し、コストと時間を削減するためにアクティブラーニングを使用しています。"
      },
      {
        "id": 13,
        "title": "Serverless Inference 課金",
        "text": "SageMaker Serverless Inference でユーザーが支払う課金対象は？",
        "choices": [
          "リクエスト実行時間とメモリ (ms-GB)",
          "常時稼働時間",
          "インスタンスタイプの月額固定費",
          "モデルサイズ"
        ],
        "answer": "リクエスト実行時間とメモリ (ms-GB)",
        "explanation": "Serverless Inference はリクエスト処理時のみ課金され、アイドルコストが発生しません。"
      },
      {
        "id": 14,
        "title": "Provisioned Concurrency の目的",
        "text": "Serverless Inference で Provisioned Concurrency を設定する主な目的は？",
        "choices": [
          "スパイク時でも予測可能なレイテンシを提供する",
          "モデルサイズを圧縮する",
          "GPU 使用率を向上させる",
          "コストを常に最小化する"
        ],
        "answer": "スパイク時でも予測可能なレイテンシを提供する",
        "explanation": "Provisioned Concurrency はエンドポイントをウォームに保ち、コールドスタートを低減します。"
      },
      {
        "id": 15,
        "title": "ハイパーパラメータチューニング並列実行",
        "text": "ベイズ最適化で多数のトレーニングジョブを並列実行しすぎると探索効率が落ちる理由は？",
        "choices": [
          "後続ジョブが前回結果を学習に活用できないため",
          "GPU メモリが不足するため",
          "S3 リクエスト上限に達するため",
          "パラメータ空間が離散化されるため"
        ],
        "answer": "後続ジョブが前回結果を学習に活用できないため",
        "explanation": "ベイズ最適化は逐次結果を使い最適化を進めるため、過度の並列化は効果を下げます。"
      },
      {
        "id": 16,
        "title": "Feature Store 同期動作",
        "text": "オンラインストアとオフラインストアを両方有効化した場合のデータ同期は？",
        "choices": [
          "オンラインに書き込んだデータが自動でオフラインにも同期される",
          "両ストアは独立し手動同期が必要",
          "オンラインのみ書き込み可能になる",
          "オフラインのみ読み取り可能になる"
        ],
        "answer": "オンラインに書き込んだデータが自動でオフラインにも同期される",
        "explanation": "両ストアを有効化すると SageMaker が整合性を維持し、リアルタイムと履歴データの差異を防ぎます。"
      },
      {
        "id": 17,
        "title": "Shadow Testing の利点",
        "text": "Shadow テストを用いる主な利点は？",
        "choices": [
          "本番トラフィックをコピーして新モデルの挙動を安全に検証できる",
          "学習データを自動生成できる",
          "料金が常に無料になる",
          "GPU 温度を監視できる"
        ],
        "answer": "本番トラフィックをコピーして新モデルの挙動を安全に検証できる",
        "explanation": "Shadow Deployment はユーザー影響なく新バージョンを長時間検証し、メトリクスが期待通りか確認できます。"
      },
      {
        "id": 18,
        "title": "Shadow Test のトラフィック割合",
        "text": "SageMaker のベストプラクティスでは昇格前にトラフィックサンプリング率を最終的に何 % まで引き上げることを推奨していますか？",
        "choices": [
          "100 %",
          "50 %",
          "10 %",
          "25 %"
        ],
        "answer": "100 %",
        "explanation": "100 % トラフィックで安定性を確認してから本番昇格するのが推奨手順です。"
      },
      {
        "id": 19,
        "title": "Pipe モード適用理由",
        "text": "データセットが大容量で I/O バウンドの場合に Pipe モードが推奨される主な理由は？",
        "choices": [
          "データをストリーミングしダウンロード時間とディスク容量を節約できる",
          "GPU 数を減らせる",
          "モデルサイズが小さくなる",
          "ログ出力が高速化する"
        ],
        "answer": "データをストリーミングしダウンロード時間とディスク容量を節約できる",
        "explanation": "Pipe モードは必要なデータのみを逐次読み込み、ディスクへの完全コピーを回避します。"
      },
      {
        "id": 20,
        "title": "Debugger ProfilerRule",
        "text": "`ProfilerRule` の主目的は？",
        "choices": [
          "CPU/GPU 使用率や I/O ボトルネックを自動検出して警告する",
          "モデルを軽量化する",
          "自動ハイパーパラメータ探索を行う",
          "データバイアスを測定する"
        ],
        "answer": "CPU/GPU 使用率や I/O ボトルネックを自動検出して警告する",
        "explanation": "ProfilerRule はシステムメトリクスを解析しスローダウンの原因やリソース不足を早期に特定します。"
      }
    ]
  },
  "AWS Certified AI Practitioner – AIF-C01": {
    "course_detail": {
      "title": "AWS Certified AI Practitioner – AIF-C01",
      "question_number": 5
    },
    "questions": [
      {
        "id": 1,
        "title": "Amazon Bedrock の役割",
        "text": "Amazon Bedrock が提供する中核的な機能はどれですか？",
        "choices": [
          "フルマネージドな基盤モデル (FM) への統一 API 提供",
          "IoT デバイスのプロビジョニング",
          "GPU インスタンスの自動スケーリングのみ",
          "S3 のオブジェクトライフサイクル管理"
        ],
        "answer": "フルマネージドな基盤モデル (FM) への統一 API 提供",
        "explanation": "Bedrock は複数ベンダーの FM をサーバーレスで呼び出し、独自データでのカスタマイズや RAG、エージェント構築を容易にします。"
      },
      {
        "id": 2,
        "title": "Guardrails for Bedrock",
        "text": "生成 AI 出力の不適切表現や個人情報流出を抑止するために Bedrock で利用する機能は？",
        "choices": [
          "Guardrails for Bedrock",
          "IAM ポリシーのみ",
          "AWS WAF レート制限",
          "Macie の機密検出"
        ],
        "answer": "Guardrails for Bedrock",
        "explanation": "Guardrails はプロンプトとレスポンス双方に適用でき、多用途アプリ間で一貫した安全基準を維持します。"
      },
      {
        "id": 3,
        "title": "Titan モデルの種類",
        "text": "Amazon Titan Image Generator G1 V1 は次のどの用途に分類されますか？",
        "choices": [
          "テキスト生成モデル",
          "画像生成モデル",
          "音声認識モデル",
          "タイムシリーズ予測モデル"
        ],
        "answer": "画像生成モデル",
        "explanation": "Titan ファミリーには画像生成 (G1 Image) のほか、テキスト・埋め込みモデルが含まれます。"
      },
      {
        "id": 4,
        "title": "SageMaker JumpStart の特徴",
        "text": "SageMaker JumpStart が提供する主な価値は次のうちどれですか？",
        "choices": [
          "事前学習済みモデルとソリューションテンプレート",
          "GPU インスタンスの 50% 割引",
          "VPC ルートテーブル自動生成",
          "オンプレ機械学習サーバー管理"
        ],
        "answer": "事前学習済みモデルとソリューションテンプレート",
        "explanation": "JumpStart は OSS モデルや基盤モデルをワンクリックでデプロイできるテンプレートを提供します。"
      },
      {
        "id": 5,
        "title": "CodeWhisperer のセキュリティ機能",
        "text": "Amazon CodeWhisperer (Amazon Q Developer) が開発者に提示する追加機能は？",
        "choices": [
          "コード脆弱性スキャンと修正提案",
          "CloudFormation テンプレート自動生成のみ",
          "IAM ロール自動プロビジョニング",
          "EKS クラスター自動チューニング"
        ],
        "answer": "コード脆弱性スキャンと修正提案",
        "explanation": "Q Developer にはインライン生成に加え、OWASP などの脆弱性検出とリメディエーション提案が統合されています。"
      },
      {
        "id": 6,
        "title": "Amazon Transcribe の用途",
        "text": "Amazon Transcribe が提供する基本機能はどれですか？",
        "choices": [
          "音声をテキストに変換",
          "画像のラベリング",
          "テキスト翻訳",
          "SQL クエリ自動生成"
        ],
        "answer": "音声をテキストに変換",
        "explanation": "Transcribe はバッチとストリーミングで音声をテキスト起こしし、話者分離やキーワードフィルタリングも可能です。"
      },
      {
        "id": 7,
        "title": "Comprehend の感情分析",
        "text": "ブログコメントのポジティブ／ネガティブ判定に最適なサービスは？",
        "choices": [
          "Amazon Comprehend",
          "Amazon Rekognition",
          "Amazon Kendra",
          "AWS Glue"
        ],
        "answer": "Amazon Comprehend",
        "explanation": "Comprehend は主要言語でドキュメント感情 (Positive/Negative/Neutral/Mixed) を返します。"
      },
      {
        "id": 8,
        "title": "Rekognition の顔分析",
        "text": "Rekognition が画像内の人物について返す属性に**含まれない**のは？",
        "choices": [
          "感情 (HAPPY など)",
          "メガネ着用の有無",
          "年齢の推定",
          "翻訳された氏名"
        ],
        "answer": "翻訳された氏名",
        "explanation": "Rekognition はランドマークや表情などのメタデータを返しますが、氏名までは提供しません。"
      },
      {
        "id": 9,
        "title": "Amazon Kendra の検索方式",
        "text": "Amazon Kendra が従来検索より高精度を実現する主な技術は？",
        "choices": [
          "セマンティック・コンテキスト検索",
          "単純なキーワード一致のみ",
          "ページランクのみ",
          "手動メタデータタグ付けのみ"
        ],
        "answer": "セマンティック・コンテキスト検索",
        "explanation": "Kendra は深層学習に基づくセマンティック検索で関連文書をランキングします。"
      },
      {
        "id": 10,
        "title": "Data Wrangler の役割",
        "text": "SageMaker Data Wrangler が機械学習パイプラインにもたらす利点は？",
        "choices": [
          "コードレスで前処理・特徴量エンジニアリングを一括管理",
          "GPU 推論高速化",
          "VPC ピアリング自動設定",
          "DynamoDB テーブルスキーマ設計"
        ],
        "answer": "コードレスで前処理・特徴量エンジニアリングを一括管理",
        "explanation": "Data Wrangler は 40+ データソース取込・変換・可視化を GUI で実行し、Flow をパイプライン化できます。"
      },
      {
        "id": 11,
        "title": "Redshift ML の学習基盤",
        "text": "Amazon Redshift ML がモデル学習時に裏側で利用するサービスは？",
        "choices": [
          "Amazon SageMaker Autopilot",
          "AWS Batch",
          "AWS Lambda",
          "Amazon EMR"
        ],
        "answer": "Amazon SageMaker Autopilot",
        "explanation": "Redshift ML は CREATE MODEL 実行時にデータを S3 にエクスポートし、SageMaker Autopilot で最適モデルをトレーニングします。"
      },
      {
        "id": 12,
        "title": "Textract の抽出機能",
        "text": "Amazon Textract が Document Analysis API で抽出できる構造化要素に**該当しない**のは？",
        "choices": [
          "テーブル",
          "フォームのキーバリュー",
          "署名",
          "音声トランスクリプト"
        ],
        "answer": "音声トランスクリプト",
        "explanation": "Textract はテキスト・フォーム・テーブル・署名を抽出しますが音声には対応しません。"
      },
      {
        "id": 13,
        "title": "Personalize のデータセット要件",
        "text": "Amazon Personalize で一般的なレコメンドを行う最低限のデータセット構成は？",
        "choices": [
          "ユーザー、アイテム、インタラクション履歴",
          "画像データのみ",
          "タイムシリーズと予測値",
          "音声コマンドログ"
        ],
        "answer": "ユーザー、アイテム、インタラクション履歴",
        "explanation": "Personalize では 3 種の CSV/JSON を S3 に用意しスキーマ定義後インポートします。"
      },
      {
        "id": 14,
        "title": "Amazon Lex のスケーリング",
        "text": "モバイル・Web・チャットサービスに展開するボットで、インフラ管理なく自動スケールするサービスは？",
        "choices": [
          "Amazon Lex",
          "Amazon Connect",
          "Amazon SES",
          "Amazon Pinpoint"
        ],
        "answer": "Amazon Lex",
        "explanation": "Lex は Alexa と同技術を用いた音声・テキストボットを自動スケールで提供します。"
      },
      {
        "id": 15,
        "title": "Polly の Neural TTS",
        "text": "Amazon Polly の Neural エンジン (NTTS) が向上させるのは？",
        "choices": [
          "音声自然度",
          "画像解像度",
          "翻訳精度",
          "GPU スループット"
        ],
        "answer": "音声自然度",
        "explanation": "NTTS は従来のコーパス結合方式より滑らかな発話を生成します。"
      },
      {
        "id": 16,
        "title": "Amazon Translate の基本",
        "text": "Amazon Translate の主な用途は？",
        "choices": [
          "テキストのリアルタイム機械翻訳",
          "画像キャプション生成",
          "動画分析",
          "フェイスマッチング"
        ],
        "answer": "テキストのリアルタイム機械翻訳",
        "explanation": "Translate はニューラル MT を用いてオンデマンドで高品質翻訳を提供します。"
      },
      {
        "id": 17,
        "title": "Amazon Forecast の特徴",
        "text": "Amazon Forecast はどの種類の問題を解決するためのサービスですか？",
        "choices": [
          "時系列予測",
          "画像分類",
          "自然言語要約",
          "顔認識"
        ],
        "answer": "時系列予測",
        "explanation": "Forecast は統計・機械学習アルゴリズムで需要やトラフィックを予測します。"
      },
      {
        "id": 18,
        "title": "SageMaker Feature Store の目的",
        "text": "Feature Store が提供する主な価値は？",
        "choices": [
          "オンライン/オフライン両用の特徴量の一元管理",
          "Lambda 同時実行 10 倍",
          "S3 ストレージコスト削減",
          "IAM ロール自動生成"
        ],
        "answer": "オンライン/オフライン両用の特徴量の一元管理",
        "explanation": "Feature Store は低レイテンシのオンラインストアと分析向けオフラインストアを提供し、再利用性を高めます。"
      },
      {
        "id": 19,
        "title": "SageMaker Clarify の機能",
        "text": "Clarify が提供する 2 つの主要機能は？",
        "choices": [
          "バイアス検出と説明可能性 (SHAP)",
          "GPU 監視とコスト最適化",
          "S3 暗号化とキー管理",
          "リアルタイム音声翻訳"
        ],
        "answer": "バイアス検出と説明可能性 (SHAP)",
        "explanation": "Clarify はデータ/モデルバイアス評価と SHAP による特徴量寄与度解析を実施します。"
      },
      {
        "id": 20,
        "title": "Bedrock Agents の役割",
        "text": "Amazon Bedrock Agents がアプリケーションで果たす役割は？",
        "choices": [
          "FM・データソース・API をオーケストレーションしユーザータスクを自動実行",
          "EC2 の AMI 自動パッチ適用",
          "RDS スケールアップの自動実行",
          "IAM ポリシーの自動生成"
        ],
        "answer": "FM・データソース・API をオーケストレーションしユーザータスクを自動実行",
        "explanation": "Bedrock Agents はアクショングループや知識ベースを介して API 呼び出しと対話を連携します。"
      }
    ]
  },
  "AWS Certified Advanced Networking – Specialty – ANS-C01": {
    "course_detail": {
      "title": "AWS Certified Advanced Networking – Specialty – ANS-C01",
      "question_number": 4
    },
    "questions": [
      {
        "id": 1,
        "title": "VPC ピアリングの制限",
        "text": "VPC ピアリングが **サポートしない** ものはどれですか？",
        "choices": [
          "トランジティブルーティング",
          "同一リージョン接続",
          "1 VPC あたり 125 接続",
          "セキュリティグループ参照"
        ],
        "answer": "トランジティブルーティング",
        "explanation": "VPC ピアリングはポイントツーポイント接続であり、経由 VPC への転送（トランジティブルーティング）は不可です。"
      },
      {
        "id": 2,
        "title": "Transit Gateway アタッチメント用サブネット",
        "text": "Transit Gateway を VPC にアタッチする際のベストプラクティスとして AWS が推奨するサブネット設計は？",
        "choices": [
          "各 AZ に /28 の専用サブネットを用意する",
          "既存アプリケーション用サブネットを共有する",
          "/16 を割り当てる",
          "サブネットを作成しない"
        ],
        "answer": "各 AZ に /28 の専用サブネットを用意する",
        "explanation": "小さな CIDR の専用サブネットを使うことでアドレス枯渇を防ぎ、NACL を全開に保つ設計が推奨されています。"
      },
      {
        "id": 3,
        "title": "PrivateLink の基本構成",
        "text": "AWS PrivateLink でプライベート接続を実現する際に **必須** となるエンドポイントタイプは？",
        "choices": [
          "インターフェイスエンドポイント",
          "ゲートウェイエンドポイント",
          "NAT Gateway",
          "Transit Gateway"
        ],
        "answer": "インターフェイスエンドポイント",
        "explanation": "PrivateLink は NLB を背後に持つサービスをインターフェイスエンドポイント経由で接続します。"
      },
      {
        "id": 4,
        "title": "Route 53 Resolver Inbound Endpoint",
        "text": "オンプレミス DNS から VPC 内リソース名を解決させたい場合に作成する Route 53 機能は？",
        "choices": [
          "Resolver Inbound Endpoint",
          "Resolver Outbound Endpoint",
          "プライベートホストゾーンのみ",
          "エイリアスレコード"
        ],
        "answer": "Resolver Inbound Endpoint",
        "explanation": "オンプレミス → AWS 方向の名前解決は Inbound Endpoint で行います。"
      },
      {
        "id": 5,
        "title": "スプリットホライズン DNS",
        "text": "同じドメイン名に対し内部と外部で異なる応答を返す設計は何と呼ばれますか？",
        "choices": [
          "スプリットホライズン DNS",
          "ドメインシャーディング",
          "リバースプロキシ",
          "サブドメインテイクオーバー"
        ],
        "answer": "スプリットホライズン DNS",
        "explanation": "Route 53 ではプライベート／パブリックホストゾーンを組み合わせて split-view (split-horizon) DNS を構成できます。"
      },
      {
        "id": 6,
        "title": "Gateway Load Balancer の用途",
        "text": "サードパーティ製ファイアウォールをスケーラブルに挿入するために最適なロードバランサー種別は？",
        "choices": [
          "Gateway Load Balancer",
          "Application Load Balancer",
          "Network Load Balancer",
          "Classic Load Balancer"
        ],
        "answer": "Gateway Load Balancer",
        "explanation": "GWLB は第 3 層でフロートラフィックを流し、アプライアンスを透過的に拡張・可用化できます。"
      },
      {
        "id": 7,
        "title": "IPv6 のアウトバウンド通信",
        "text": "IPv6-only サブネットからインターネットへの **アウトバウンド通信のみ** を許可する AWS リソースは？",
        "choices": [
          "Egress-only Internet Gateway",
          "Internet Gateway",
          "NAT Gateway",
          "VPC エンドポイント"
        ],
        "answer": "Egress-only Internet Gateway",
        "explanation": "egress-only IGW は IPv6 版 NAT 的動作で、ステートフルに戻りトラフィックを許可します。"
      },
      {
        "id": 8,
        "title": "AWS Network Firewall の特徴",
        "text": "AWS Network Firewall が提供する **ステートフル** インスペクションルールはどの OSS ルール言語と互換がありますか？",
        "choices": [
          "Suricata ルール",
          "Snort ルール",
          "iptables 形式",
          "OpenFlow"
        ],
        "answer": "Suricata ルール",
        "explanation": "ステートフルエンジンは Suricata ルールセット互換で高度なシグネチャベース検査を実装します。"
      },
      {
        "id": 9,
        "title": "Elastic Fabric Adapter (EFA)",
        "text": "MPI を用いる HPC アプリのレイテンシを劇的に低減するネットワークアダプタは？",
        "choices": [
          "Elastic Fabric Adapter",
          "Elastic Network Adapter",
          "ENA Express",
          "SR-IOV VF"
        ],
        "answer": "Elastic Fabric Adapter",
        "explanation": "EFA は OS バイパスで数千ノードまでスケールし、オンプレ HPC 並みの性能を実現します。"
      },
      {
        "id": 10,
        "title": "Site-to-Site VPN の高可用性",
        "text": "AWS が推奨する **2 本のトンネル＋BGP** 構成を採用する主な理由は？",
        "choices": [
          "トンネル障害時に自動フェイルオーバーできる",
          "暗号化オーバーヘッドが減る",
          "静的ルーティングのみ許可される",
          "NAT Traversal が不要になる"
        ],
        "answer": "トンネル障害時に自動フェイルオーバーできる",
        "explanation": "BGP により経路が自動切替わり、高可用 VPN を実現します。"
      },
      {
        "id": 11,
        "title": "Direct Connect レジリエンシ",
        "text": "AWS が **高可用性** を必要とするワークロード向けに推奨する Direct Connect 接続モデルは？",
        "choices": [
          "複数ロケーション・複数回線で動的ルーティングを利用",
          "単一ロケーション・スタティックルート",
          "S3 経由転送",
          "VPN 併用のみ"
        ],
        "answer": "複数ロケーション・複数回線で動的ルーティングを利用",
        "explanation": "複数 DX ロケーション + BGP で経路自動フェイルオーバーを実現するのがレジリエンシ推奨です。"
      },
      {
        "id": 12,
        "title": "Direct Connect Gateway の利点",
        "text": "Direct Connect Gateway (DXGW) を使用する主なメリットは？",
        "choices": [
          "単一 DX 接続で世界中のリージョン VPC に接続できる",
          "NAT 料金が半額になる",
          "IPv6 が IPv4 に変換される",
          "物理回線が不要"
        ],
        "answer": "単一 DX 接続で世界中のリージョン VPC に接続できる",
        "explanation": "DXGW はリージョン非依存リソースで、クロスリージョン VIF ルーティングを提供します。"
      },
      {
        "id": 13,
        "title": "Global Accelerator と CloudFront",
        "text": "L4 Anycast ルーティングにより動的 TCP/UDP トラフィックのレイテンシを短縮するサービスは？",
        "choices": [
          "AWS Global Accelerator",
          "Amazon CloudFront",
          "Route 53",
          "Network Load Balancer"
        ],
        "answer": "AWS Global Accelerator",
        "explanation": "Global Accelerator は静的 Anycast IP で TCP/UDP をエッジに吸収し、HTTP キャッシュ用途の CloudFront と役割が異なります。"
      },
      {
        "id": 14,
        "title": "Traffic Mirroring 制限",
        "text": "VPC Traffic Mirroring が **利用できない** インスタンス形態は？",
        "choices": [
          "Bare-metal インスタンス",
          "Nitro 系 c6g インスタンス",
          "ENA Express 対応インスタンス",
          "GPU インスタンス p5"
        ],
        "answer": "Bare-metal インスタンス",
        "explanation": "Traffic Mirroring は bare-metal では未対応で、限定された非 Nitro 世代のみ対応します。"
      },
      {
        "id": 15,
        "title": "NAT Gateway スループット",
        "text": "1 つの NAT Gateway が自動スケールする最大スループットは？",
        "choices": [
          "100 Gbps",
          "10 Gbps",
          "5 Gbps",
          "無制限"
        ],
        "answer": "100 Gbps",
        "explanation": "NAT Gateway は 5 Gbps から自動で最大 100 Gbps まで拡張します。"
      },
      {
        "id": 16,
        "title": "Flow Logs の action フィールド",
        "text": "VPC Flow Logs の **action** フィールドに取り得る代表的な値は？",
        "choices": [
          "ACCEPT / REJECT",
          "ALLOW / DENY",
          "SUCCESS / FAIL",
          "PASS / DROP"
        ],
        "answer": "ACCEPT / REJECT",
        "explanation": "action はパケットがセキュリティグループや NACL により許可されたか否かを示す ACCEPT / REJECT を記録します。"
      },
      {
        "id": 17,
        "title": "Accelerated Site-to-Site VPN",
        "text": "Global Accelerator を活用して VPN の性能と可用性を高める機能は？",
        "choices": [
          "Accelerated Site-to-Site VPN",
          "VPN CloudHub",
          "VPN Equal-Cost Multi-path",
          "IPv6 Static VPN"
        ],
        "answer": "Accelerated Site-to-Site VPN",
        "explanation": "Edge Anycast IP でトラフィックを AWS グローバルネットワークに早期収容し、レイテンシとフェイルオーバーを向上します。"
      },
      {
        "id": 18,
        "title": "Network Access Analyzer の目的",
        "text": "Network Access Analyzer が提供する主な価値は？",
        "choices": [
          "意図しないネットワークパスを特定しセキュリティ姿勢を改善する",
          "VPC 間転送料金を削減する",
          "ルートテーブルを自動生成する",
          "パケットキャプチャを実行する"
        ],
        "answer": "意図しないネットワークパスを特定しセキュリティ姿勢を改善する",
        "explanation": "Network Access Analyzer は Access Scope で定義した要件に反する経路を静的解析で検出します。"
      },
      {
        "id": 19,
        "title": "Network Access Analyzer の解析方式",
        "text": "Network Access Analyzer がパケット送信を伴わず解析できる理由は？",
        "choices": [
          "自動推論 (Automated Reasoning) による静的解析を行うため",
          "VPC Flow Logs を常時収集しているため",
          "DNS クエリを送信しているため",
          "NetFlow エクスポートを行うため"
        ],
        "answer": "自動推論 (Automated Reasoning) による静的解析を行うため",
        "explanation": "ネットワーク構成を数理モデル化し、パケットを流さず到達可能経路を証明します。"
      },
      {
        "id": 20,
        "title": "NAT Gateway の AZ 設計",
        "text": "高可用性とスループット確保のため、AWS が推奨する NAT Gateway の配置は？",
        "choices": [
          "各 AZ ごとに 1 台ずつ配置する",
          "最も安価な AZ に 1 台のみ置く",
          "パブリックサブネットなしで利用する",
          "1 つの AZ に複数台重複配置はできない"
        ],
        "answer": "各 AZ ごとに 1 台ずつ配置する",
        "explanation": "各 AZ に NAT GW を設置し、AZ 障害時の依存とスループットボトルネックを回避する設計が推奨されます。"
      }
    ]
  }
};